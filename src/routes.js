import { Router } from 'express';
import ClientController from './app/controller/ClientController';
import ProductController from './app/controller/ProductController';

const routes = new Router();

routes.get('/product', ProductController.listAllProducts);

routes.post('/product', ProductController.saveProduct);

routes.put('/product', ProductController.updateProduct);

routes.get('/loja', (req, res) => {
    res.json({ message: 'Este é um endpoint que retornará todas as lojas físicas'})
});

routes.post('/client', ClientController.saveClient);

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

export default routes;

