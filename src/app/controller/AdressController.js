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
        console.log("Validando endereço")
        return await schema
            .validate(require.body)
            .then(async function (validatedAdress) {
                console.log("Validado com sucesso")

                console.log("Salvando endereço no banco")
                const savedAdress = await Adress.create(validatedAdress);
                console.log("Salvo com sucesso")

                console.log("Retornando o endereço salvo")
                return response.status(201).json(savedAdress);
            })
            .catch(async function (err) {
                console.log("Tratamento de exceção. Algo deu errado!")

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
            
            console.log("Validando endereço")
            const adress = await Adress
                .findByPk(validatedAdress.adressId);
                console.log("Validado com sucesso")

            const updateAdress = await adress
                .update(validatedAdress)
                console.log("Endereço alterado")

                console.log("Salvando alteração no banco")
            return response.status(200).json(updateAdress);
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!")
            return response.status(401).json({ message: "Algo deu errado!", err });
        });
    
    };

    async listAllAdresses(require, response) {
        console.log("Listando todos os endereços")
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

            console.log("Validando endereço a ser excluído")
            const adress = await Adress
                .findByPk(validatedAdress.adressId);
            const deleteAdress = await adress
                .destroy(validatedAdress)

                console.log("Endereço excluído com sucesso")
            return response.status(200).json({message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!")
            return response.status(401).json({ message: err })
        });
    };
}

export default new AdressController();