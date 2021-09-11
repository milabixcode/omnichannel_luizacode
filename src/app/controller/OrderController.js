import { response } from 'express';
import * as Yup from 'yup';
import Client from '../models/Client';
import Order from '../models/Order';
import Product from '../models/Product';


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
    
    async addItemToOrder(require, response) {
        const schema = Yup.object().shape({
            client: Yup.number().required(),
	        product: Yup.number().required(),
            quantity: Yup.string().required(),
            value: Yup.number().required()
        })

        const createdOrder = await schema.validate(require.body)
        .then(async function (validateItem) {
            const statusAberto = "ABERTO";
            console.log("Buscando pedido");
            
            const order = await Order.findOne({where: {
                client: validateItem.client,
                statusDescription: statusAberto
            }});
                        
            if (order === null) {
                console.log("Pedido inexistente, buscando cliente para criação de pedido")
                return Client.findByPk(validateItem.client)
                .then(async function (client) {

                    console.log("Buscando produto para inserir no pedido")
                    return await Product.findByPk(validateItem.product)
                    .then(async function (product) {

                        console.log("Criando pedido")
                        return await Order.create({
                            valueFreight: 1150,
                            statusDescription: statusAberto
                        }).then(async function (order) {

                            order.setClient(client)
                            order.setAdress(await client.getAddress())
                            order.addProduct(product, {through: {
                                value: validateItem.value,
                                quantity: validateItem.quantity
                            }})
                            return order
                            // decrementar a quantidade do inventario de quantidade
                        }).catch((err) => {
                            console.log(err)
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
                
            } else {
                return await Product.findByPk(validateItem.product)
                .then(async function (product) {
                    order.addProduct(product, {through: {
                        value: validateItem.value,
                        quantity: validateItem.quantity
                    // decrementar a quantidade do inventario de quantidade
                        
                    }})
                    return order 
                })
            }

            
        })

        return response.status(200).json(createdOrder)
    }

    async updateOrder(require, response) {
        console.log('Atualizando pedido:', require.body);
        // const schema = Yup.object().shape({
        //     orderId: Yup.number().required()
        // });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedOrder) {
            const order = await Order.findByPk(validatedOrder.orderId);

            if(order === null) {
                
            } else {

            }
            const updatedOrder = await order.update(validatedOrder);
            return response.status(200).json(updatedOrder);
        })
        .catch(async function(err) {
            return response.status(400).json({ message: err })
        });
    
    };
}

export default new OrderController();