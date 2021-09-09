import { response } from 'express';
import * as Yup from 'yup';
import Client from '../models/Client';


class ClientController {    
    async saveClient(require, response) {
        console.log('Cadastrando cliente:', require.body);
        const schema = Yup.object().shape({
            clientFirstName: Yup.string().required(),
            clientLastName: Yup.string().required(),
            clientCpf: Yup.string(),
            clientCnpj: Yup.string(),
            clientBirthDate: Yup.date(),
            clientEmail: Yup.string().required(),
            clientPassword: Yup.string().required(),
            clientPhone: Yup.string()
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

    async deleteClient(require, response) {
        console.log('Excluindo cliente:', require.body);
        const schema = Yup.object().shape({
            clientId: Yup.number().required()
        });

        return await schema
        .validate(require.body)
        .then(async function(validatedClient){
            const client = await Client.findByPk(validatedClient.clientId);
            const deleteClient = await client.destroy(validatedClient);    
            return response.status(200).json(deleteClient, {message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            return response.status(400).json({ message: err })
        });
    };
}

export default new ClientController();