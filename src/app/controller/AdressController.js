import { response } from 'express';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';
import Adress from '../models/Adress';

class AdressController {
    
    async saveAdress(require, response) {
        console.log('Cadastrando endereço:', require.body);
        const schema = Yup.object().shape({
            adressName: Yup.string().required(),
            addressStreet: Yup.string().required(),
            adressNumber: Yup.number().required(),
            adressCEP: Yup.string().required(),
            adressCity: Yup.string().required(),
            adressState: Yup.string().required()
        });    

        return await schema
            .validate(require.body)
            .then(async function (validatedAdress) {
                const savedAdress = await Adress.create(validatedAdress);
                return response.status(201).json(savedAdress);
            })
            .catch(async function (err) {
                return response.status(401).json({ message: err })
            });

    };

    async updateAdress(require, response) {
        console.log('Atualizando endereço:', require.body);
        const schema = Yup.object().shape({
            adressId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedAdress) {
            const adress = await Adress
                .findByPk(validatedAdress.adressId);
            const updateAdress = await adress
                .update(validatedAdress)
            return response.status(200).json(updateAdress);
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    
    };

    async listAllAdresses(require, response) {
        const allAdresses = await Adress.findAll();
        console.log('Recuperando todos os endereços', allAdresses);
        return response.status(200).json(allAdresses);
    };

    async deleteAdress(require, response) {
        console.log('Excluindo endereço:', require.body);
        const schema = Yup.object().shape({
            adressId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedAdress) {
            const adress = await Adress
                .findByPk(validatedAdress.adressId);
            const deleteAdress = await adress
                .destroy(validatedAdress)
            return response.status(2000).json(deleteAdress, {message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    };
}

export default new AdressController();