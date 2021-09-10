import { response } from 'express';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';
import Store from '../models/Store';
import Adress from '../models/Adress';
import sequelize from '../../database/index';

class StoreController {
    
    async saveStore(require, response) {
        console.log('Iniciando o processo de cadastro:', require.body);
        const schema = Yup.object().shape(
        //     {
        //     storeName: Yup.string().required(),
        //     adressName: Yup.string().required(),
        //     adressNumber: Yup.integer().required(),
        //     adressCEP: Yup.string().required(),
        //     adressCity: Yup.string().required(),
        //     adressState: Yup.string().required()
        // }
        );    

        return await schema
            .validate(require.body)
            .then(async function (validatedStore) {
                console.log('Loja validada')
                const store = {
                    addressID: validatedStore.adress,
                    storeName: validatedStore.storeName
                }
                console.log('Salvando loja', store)

                const savedStore = await Store.create(store, 
                    {include:
                        [
                            {
                                model: Adress,
                                as: 'addressID'
                            }
                        ]
                    }
                ).catch((ex) => {
                    console.log(ex)
                });
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
            const contractStore = {
                addressID: validatedStore.adress,
                storeName: validatedStore.storeName
            }
            const store = await Store
                .findByPk(validatedStore.storeId)
                .then((updateStore) => {
                    return updateStore
                    .update(contractStore)
                    .then((storeRecord) => {
                        Adress.findByPk(storeRecord.dataValues.adressId)
                        .then((adressRecord) => {
                            return adressRecord.update(validatedStore.adress)
                        })
                        return storeRecord
                    })
                });
            
            return response.status(200).json(store);
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
            await Store
                .findByPk(validatedStore.storeId)
                .then((toBeDeletedStore) => {
                    Adress.findByPk(toBeDeletedStore.dataValues.adressId)
                    .then((adressToBeDeleted) => {
                        return adressToBeDeleted.destroy()
                        
                    })
                    return toBeDeletedStore.destroy()
                });
            return response.status(200).json({message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    };
}

export default new StoreController();