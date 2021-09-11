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
                
        return await schema
            .validate(require.body)
            .then(async function (validatedOrder) {
                const savedOrder = await Order.create(validatedOrder);
                return response.status(201).json(savedOrder);
            })
            .catch(async function (err) {
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
            const order = await Order.findByPk(validatedOrder.orderId);
            const updatedOrder = await order.update(validatedOrder);
            return response.status(200).json(updatedOrder);
        })
        .catch(async function(err) {
            return response.status(400).json({ message: err })
        });
    
    };
}

export default new OrderController();