import { response } from 'express';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';
import Store from '../models/Store';
import Adress from '../models/Adress';

class StoreController {
    
    async saveStore(require, response) {
        console.log('Iniciando o processo de cadastro:', require.body);
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
                console.log('Loja validada')
                const savedAdress = await Adress.create(require.body.adress);
                console.log('Endereço salvo', savedAdress)
                const store = {
                    adresses: savedAdress.dataValues.adressId,
                    storeName: require.body.storeName

                }
                console.log('Salvando loja', store)

                // const savedStore = await Store.create(store);
                // console.log('Loja salva', savedStore)
                // return response.status(201).json(savedStore);
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
                .findByPk(validatedStore.storeId);
            const updateStore = await store
                .update(validatedStore)
            return response.status(200).json(updateStore);
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    
    };

    async listAllStores(require, response) {
        const allStores = await Store.findAll();
        console.log('Recuperando todas as lojas', allStores);
        return response.status(200).json(allStores);
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
                .destroy(validatedStore)
            return response.status(2000).json(deleteStore, {message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    };
}

export default new StoreController();