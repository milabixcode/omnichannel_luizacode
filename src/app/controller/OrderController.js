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

                    //se tiver mais de uma loja associada ao produto qual vai ser a 
                    //estrategia de decremento da quantidade doo produto no estoque.

                    //falta o endpoint que remove o item
                    //endpoint de finalizar pedido está pronto
                        
                    }})
                    return order 
                })
            }

            
        })

        return response.status(200).json(createdOrder)
    }

    async deleteItemFromOrder(require, response) {
        console.log('Iniciando a remoção do item do pedido')

        const schema = Yup.object().shape({
            orderId: Yup.number().required(),
            orderProductId: Yup.number().required()
        })

        return await schema
        .validate(require.body)
        .then(async function(validatedRequest){
            const order = await Order.findByPk(validatedRequest.orderId);
            console.log(`Resultado da busca do Pedido: , ${order}`)
            if(order){
                console.log('Pedido encontrado')
                
                const itemArray = await order.getItems({
                    where: {
                        product: validatedRequest.orderProductId
                    }
                })

                if(itemArray.length > 0) {
                    const item = itemArray.pop()
                    console.log('Item encontrado', item)
                    await item.decrement('quantity')
                    await item.reload()
                    //incrementar no inventario

                    if(item.quantity <= 0) {
                        await item.destroy()
                        await order.reload()
                    }

                    const orderItems = await order.getItems()
                    console.log('Itens atualizados no Pedido', orderItems)
                    if(orderItems.length == 0) {
                        await order.destroy()
                    }                    
                }
               
            } else {
                return response.status(401).json({ message: `Pedido ${validatedRequest.orderId} não encontrado`})

            }
            return response.status(200).json()
            
        }).catch((err) => {
            return response.status(401).json(err)
        })
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