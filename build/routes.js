"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const routes = new (0, _express.Router)();

routes.get('/produto', (req, res) => {
    res.json({ message: "Este é um endpoint que retornará todos os produtos"})
});

routes.get('/loja', (req, res) => {
    res.json({ message: 'Este é um endpoint que retornará todas as lojas físicas'})
});

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

exports. default = routes;

