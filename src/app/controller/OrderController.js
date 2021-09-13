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
    
    async addItemToOrder(require, response) {
        const schema = Yup.object().shape({
            client: Yup.number().required(),
	        product: Yup.number().required(),
            quantity: Yup.string().required(),
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

                            await order.setClient(client)
                            await order.setAdress(await client.getAddress())
                            await order.addProduct(product, {through: {
                                value: validateItem.value,
                                quantity: validateItem.quantity
                            }})
                            const inventories = await product.getInventories()
                            OrderController.sortInventories(inventories)
                            const inventory = inventories.pop()
                            await inventory.decrement('quantity', { by: validateItem.quantity })
                            return order
                           
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
                    const items = await order.getItems({
                        where: {
                            product: product.productId 
                        }
                    })
                    
                    if(items.length > 0) {
                        const item = items[0]
                        await item.increment('quantity', { by: validateItem.quantity })
                    }
                    
                    const inventories = await product.getInventories()
                            OrderController.sortInventories(inventories)
                            const inventory = inventories.pop()
                            await inventory.decrement('quantity', { by: validateItem.quantity })
                    return order 
                })
            }            
        })

        return response.status(200).json(createdOrder)
    }
    static sortInventories(inventories) {
        inventories.sort((a, b) => {
           return a.quantity - b.quantity
        })
    }

    async deleteItemFromOrder(require, response) {
        console.log('Iniciando a remoção do item do pedido', require.body)
        const statusAberto = "ABERTO";


        const schema = Yup.object().shape({
            clientId: Yup.number().required(),
            orderProductId: Yup.number().required()
        })

        const deleteItem = {
            clientId: require.params.clientId,
            orderProductId: require.params.productId
        }

        return await schema
        .validate(deleteItem)
        .then(async function(validatedRequest){
            const order = await Order.findOne({
                where: {
                    client: validatedRequest.clientId,
                    statusDescription: statusAberto                }
            });
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
                    const product = await item.getReferenceProduct()
                    const inventories = await product.getInventories()
                    OrderController.sortInventories(inventories)
                    const inventory = inventories[0]
                    inventory.increment('quantity')

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
                return response.status(401).json({ message: `Pedido ${validatedRequest.clientId} não encontrado`})
            }

            return response.status(200).json()
            
        }).catch((err) => {
            return response.status(401).json(err)
        });
    }

    async updateOrder(require, response) {
        console.log('Atualizando pedido:', require.body);
        const schema = Yup.object().shape( {
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

    async admListAllOrders(require, response) {
        console.log(`Listando todos os pedidos`)
        const orders = await Order.findAll()
        return response.status(200).json(orders);
    }
}

export default new OrderController();