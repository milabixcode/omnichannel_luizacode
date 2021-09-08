import { response } from 'express';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';
import Store from '../models/Store';

class StoreController {
    async listAllStores(require, response) {
        const allStores = await Store.findAll();
        console.log('Recuperando todas as lojas', allStores);
        return response.status(200).json(allStores);
    }

    async saveStore(require, response) {
        console.log('Cadastrando loja:', require.body);
        const schema = Yup.object().shape({
            storeName: Yup.string().required(),
            adressName: Yup.string().required(),
            adressNumber: Yup.integer().required(),
            adressCEP: Yup.string().required(),
            adressCity: Yup.string().required(),
            adressState: Yup.string().required()
        });    

        return await schema
            .validate(require.body)
            .then(async function (validatedStore) {
                const savedStore = await Store.create(validatedStore);
                return response.status(201).json(savedStore);
            })
            .catch(async function (err) {
                return response.status(401).json({ message: err })
            });

    };

    async updateStore(require, response) {
        console.log('Atualizando loja:', require.body);
        const schema = Yup.object().shape({
            storeId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedStore) {
            const store = await Store
                .findByPk(validatedStore.storetId);
            const updateStore = await store
                .update(validatedStore)
            return response.status(200).json(updateStore);
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    
    };

    async deleteStore(require, response) {
        console.log('Excluindo loja:', require.body);
        const schema = Yup.object().shape({
            storeId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedStore) {
            const store = await Store
                .findByPk(validatedStore.storeId);
            const deleteStore = await store
                .delete(validatedStore)
            return response.status(2000).json(deleteStore);
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    };
}

export default new StoreController();