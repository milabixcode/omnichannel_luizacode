import { response } from 'express';
import * as Yup from 'yup';
import Product from '../models/Product';
import Store from '../models/Store';

class ProductController {
    
    async saveProduct(require, response) {
        console.log('Cadastrando produto:', require.body);
        const schema = Yup.object().shape({
            productName: Yup.string().required(),
            categoryName: Yup.string().required(),
            imageUrl: Yup.string().url().required(),
            store: Yup.number().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required()
        });    

        console.log("Validando produto");
        return await schema
            .validate(require.body)
            .then(async function (validatedProduct) {
                console.log("Validado com sucesso");
                
                console.log("Salvando produto no banco");
                const product = {
                    productName: validatedProduct.productName,
                    categoryName: validatedProduct.categoryName,
                    imageUrl: validatedProduct.imageUrl,
                    price: validatedProduct.price
                }
                const savedProduct = await Product.create(product)
                const store = await Store.findByPk(validatedProduct.store)
                savedProduct.addStore(store, { through: { quantity: validatedProduct.quantity }})
                console.log("Salvo com sucesso");

                console.log("Retornando o produto salvo");
                return response.status(201).json(savedProduct);
            })
            .catch(async function (err) {
                console.log("Tratamento de exceção. Algo deu errado!");

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
            
            console.log("Validando produto");
            const product = await Product
                .findByPk(validatedProduct.productId);
                console.log("Validado com sucesso");

            const updateProduct = await product
                .update(validatedProduct)
                console.log("Produto alterado");

            console.log("Salvando alteração no banco");
            return response.status(200).json(updateProduct);
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!");
            return response.status(401).json({ message: err })
        });
    
    };

    async listAllProducts(require, response) {
        console.log("Listando todos os produtos");
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
            
            console.log("Validando produto a ser excluído");
            const product = await Product
                .findByPk(validatedProduct.productId);
            const deleteProduct = await product
                .destroy(validatedProduct)

                console.log("Produto excluído com sucesso");
            return response.status(200).json({message: "Deletado com sucesso"});
        })
        .catch(async function(err) {
            console.log("Tratamento de exceção. Algo deu errado!")
            return response.status(401).json({ message: err })
        });
    };

    async getOneProduct(require, response) {
        return response.status(200).json(await Product.findByPk(require.params.productId))
    }
    
}


export default new ProductController();