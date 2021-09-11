import * as Yup from 'yup';
import Client from '../models/Client';


class ClientController {    
    async saveClient(require, response) {
        console.log('Cadastrando cliente:', require.body);
        const schema = Yup.object().shape({
            addressId: Yup.number().required(),
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
        
        console.log("Validando cliente");
        return await schema
            .validate(require.body)
            .then(async function (validatedClient) {
                    
                    console.log("Validado com sucesso");

                    console.log("Salvando cliente no banco");
                    const savedClient = await Client.create(validatedClient);                                          
                    console.log("Salvo com sucesso");
                    
                    console.log("Retornando cliente salvo");
                    return response.status(201).json(savedClient);                                   
                                 
            })
            .catch(async function (err) {
                console.log("Tratamento de exceção. Algo deu errado!");
                
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
            
            console.log("Validando cliente");
            const client = await Client.findByPk(validatedClient.clientId);
            console.log("Validado com sucesso");
            
            const updatedClient = await client.update(validatedClient);
            console.log("Cliente alterado")

            console.log("Salvando alteração no banco");
            return response.status(200).json(updatedClient);
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!");
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
            
            console.log("Validando cliente a ser excluído");
            const client = await Client.findByPk(validatedClient.clientId);
            const deletedClient = await client.destroy(validatedClient);    

            console.log("Cliente excluído com sucesso");
            return response.status(200).json({ message: "Deletado com sucesso"});

        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!");
            return response.status(400).json({ message: err })
        });
    };
}

export default new ClientController();