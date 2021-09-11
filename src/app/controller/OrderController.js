import { response } from 'express';
import * as Yup from 'yup';
import Order from '../models/Order';


class OrderController {    
    async saveOrder(require, response) {
        console.log('Cadastrando pedido:', require.body);
        const schema = Yup.object().shape({
            client: Yup.number().required(),
            adress: Yup.number().required(),
	        valueFreight: Yup.number().required(),
            paymentType: Yup.string().required(),
	        statusDescription: Yup.string().required()
        })
        console.log("Validando pedido");        
        return await schema
            .validate(require.body)
            .then(async function (validatedOrder) {
                console.log("Validado com sucesso");

                console.log("Salvando pedido no banco");
                const savedOrder = await Order.create(validatedOrder);
                console.log("Salvo com sucesso");

                console.log("Retornando pedido salvo");
                return response.status(201).json(savedOrder);
            })
            .catch(async function (err) {
                console.log("Tratamento de exceção. Algo deu errado!");
                return response.status(400).json({ message: err });
            });
    };    

    async updateOrder(require, response) {
        console.log('Atualizando pedido:', require.body);
        const schema = Yup.object().shape({
            orderId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedOrder) {
            
            console.log("Validando pedido");
            const order = await Order.findByPk(validatedOrder.orderId);
            console.log("Validade com sucesso");
            
            const updatedOrder = await order.update(validatedOrder);
            console.log("Pedido atualizado");
            
            console.log("Salvando alteração no banco");
            return response.status(200).json(updatedOrder);
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!");
            return response.status(400).json({ message: err })
        });
    
    };
}

export default new OrderController();