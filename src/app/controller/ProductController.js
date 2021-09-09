import { response } from 'express';
import * as Yup from 'yup';
import Product from '../models/Product';

class ProductController {
    
    async saveProduct(require, response) {
        console.log('Cadastrando produto:', require.body);
        const schema = Yup.object().shape({
            productName: Yup.string().required(),
            categoryName: Yup.string().required(),
            quantity: Yup.number().required().min(1),
            imageUrl: Yup.string().url().required()
        });    

        return await schema
            .validate(require.body)
            .then(async function (validatedProduct) {
                const savedProduct = await Product.create(validatedProduct);
                return response.status(201).json(savedProduct);
            })
            .catch(async function (err) {
                return response.status(401).json({ message: err })
            });

    };

    async updateProduct(require, response) {
        console.log('Atualizando produto:', require.body);
        const schema = Yup.object().shape({
            productId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedProduct) {
            const product = await Product
                .findByPk(validatedProduct.productId);
            const updateProduct = await product
                .update(validatedProduct)
            return response.status(200).json(updateProduct);
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    
    };

    async listAllProducts(require, response) {
        const todosOsProdutos = await Product.findAll({where: require.body});
        console.log('Recuperando todos os produtos', todosOsProdutos);
        return response.status(200).json(todosOsProdutos);
    };

    async deleteProduct(require, response) {
        console.log('Excluindo produto:', require.body);
        const schema = Yup.object().shape({
            productId: Yup.number().required()
        });
    
        return await schema
        .validate(require.body)
        .then(async function(validatedProduct) {
            const product = await Product
                .findByPk(validatedProduct.productId);
            const deleteProduct = await product
                .destroy(validatedProduct)
            return response.status(200).json(deleteProduct, {message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            return response.status(401).json({ message: err })
        });
    };

    
}

export default new ProductController();