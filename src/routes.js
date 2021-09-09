import { Router } from 'express';

import ClientController from './app/controller/ClientController';
import ProductController from './app/controller/ProductController';
import StoreController from './app/controller/StoreController';
import AdressController from './app/controller/AdressController';

import authMiddleware from './app/middlewares/auth';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

//routes.use(authMiddleware);

routes.get('/product', ProductController.listAllProducts);
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



routes.put('/lista-de-compra', (req, res) => {
    res.json({ message: 'Este é um endpoint que adiciona um produto na lista de compra do cliente'})
});

routes.delete('/lista-de-compra', (req, res) => {
    res.json({ message: 'Este é um endpoint que remove um produto da lista de compra do cliente'})
});

routes.post('/checkout', (res, req) => {
    res.json({ message: 'Este é um endpoint que finaliza a compra'})
});

routes.get('/pedido', (res,req) => {
    res.json({ message: 'Este é um endpoint que consulta todas as compras do cliente'})
});



routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));



// app.get('/terms', (request, response) => {
//     return response.json({ message: 'Termos de Serviço'});

// });




export default routes;

