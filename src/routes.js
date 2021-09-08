import { Router } from 'express';
import ProductController from './app/controller/ProductController';
import StoreController from './app/controller/StoreController';

const routes = new Router();

routes.get('/product', ProductController.listAllProducts);
routes.post('/product', ProductController.saveProduct);
routes.put('/product', ProductController.updateProduct);
routes.delete('/product', ProductController.deleteProduct);

routes.get('/store', StoreController.listAllStores);
routes.post('/store', StoreController.saveStore);
routes.put('/store', StoreController.updateStore);
routes.delete('/store', StoreController.deleteStore);


routes.post('/cliente', (req, res) => {
    res.json({ message: 'Este é um endpoint que cadastrará os clientes'})
});

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

