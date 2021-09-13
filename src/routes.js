import { Router } from 'express';

import ClientController from './app/controller/ClientController';
import ProductController from './app/controller/ProductController';
import StoreController from './app/controller/StoreController';
import AdressController from './app/controller/AdressController';
import OrderController from './app/controller/OrderController'

import authMiddleware from './app/middlewares/auth';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';
import Order from './app/models/Order';

const routes = new Router();

routes.get('/product', ProductController.listAllProducts);
routes.get('/product/:productId', ProductController.getOneProduct);
routes.post('/product', ProductController.saveProduct);
routes.put('/product', ProductController.updateProduct);
routes.delete('/product', ProductController.deleteProduct);

routes.get('/store', StoreController.listAllStores);
routes.post('/store', StoreController.saveStore);
routes.put('/store', StoreController.updateStore);
routes.delete('/store', StoreController.deleteStore);


routes.post('/client', ClientController.saveClient);
routes.put('/client', ClientController.updateClient);
routes.get('/client',ClientController.listAllClients);
routes.delete('/client', ClientController.deleteClient);

routes.post('/adress', AdressController.saveAdress);
routes.put('/adress', AdressController.updateAdress);
routes.get('/adress', AdressController.listAllAdresses);
routes.delete('/adress', AdressController.deleteAdress);

routes.put('/order/item', OrderController.addItemToOrder);
routes.delete('/:clientId/order/item/:productId', OrderController.deleteItemFromOrder);

routes.put('/checkout', OrderController.updateOrder);
routes.post('/checkout', OrderController.checkoutOrder);

routes.get('/:clientId/order',  ClientController.listAllOrdersFromClient);
routes.get('/:clientId/order/:orderId', ClientController.listOneOrderFromClient);
routes.get('/order', OrderController.admListAllOrders);

routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

export default routes;

