import { response } from 'express';
import * as Yup from 'yup';
import Client from '../models/Client';


class ClientController {    
    async saveClient(require, response) {
        console.log('Cadastrando cliente:', require.body);
        const schema = Yup.object().shape({
<<<<<<< Updated upstream
            addressID: Yup.number().required(),
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            cpf: Yup.string(),
            cnpj: Yup.string(),
            birthDate: Yup.date(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            phone: Yup.string(),
            option: Yup.string().required()
        })
=======
            clientFirstName: Yup.string().required(),
            clientLastName: Yup.string().required(),
            clientCpf: Yup.string(),
            clientCnpj: Yup.string(),
            clientBirthDate: Yup.date(),
            clientEmail: Yup.string().required(),
            clientPassword: Yup.string().required(),
            clientPhone: Yup.string(),
            clientPassword: Yup.string().required().min(6)
        });
        
        if(!(await schema.isValid(req.body))){
            return res.status(401).json({ message: 'Ooops dados inválidos' })
          }
>>>>>>> Stashed changes
        
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
            const deletedClient = await client.destroy(validatedClient);    
            return response.status(200).json({ message: "Deletado com sucesso"}, {deletedClient: deletedClient});

        })
        .catch(async function(err) {
            return response.status(400).json({ message: err })
        });
    };
}

export default new ClientController();