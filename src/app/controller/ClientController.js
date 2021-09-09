import { response } from 'express';
import * as Yup from 'yup';
import Client from '../models/Client';


class ClientController {    
    async saveClient(require, response) {
        console.log('Cadastrando cliente:', require.body);
        const schema = Yup.object().shape({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            cpf: Yup.string(),
            cnpj: Yup.string(),
            birthDate: Yup.date(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            phone: Yup.string()
        });    
        
        return await schema
            .validate(require.body)
            .then(async function (validatedClient) {
                const savedClient = await Client.create(validatedClient);
                return response.status(201).json(savedClient);
            })
            .catch(async function (err) {
                return response.status(400).json({ message: err });
            });
    };    

    async updateClient(require, response) {
        console.log('Atualizando cliente:', require.body);
        const schema = Yup.object().shape({
            clientId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedClient) {
            const client = await Client.findByPk(validatedClient.clientId);
            const updatedClient = await client.update(validatedClient);
            return response.status(200).json(updatedClient);
        })
        .catch(async function(err) {
            return response.status(400).json({ message: err })
        });
    
    };
    
    async listAllClients(require, response) {
        const todosClientes = await Client.findAll({where: require.body});
        console.log('Listando todos os clientes', todosClientes);
        return response.status(200).json(todosClientes);
    }
}

export default new ClientController();