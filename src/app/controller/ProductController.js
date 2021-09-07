import Product from '../models/Product';

class ProductController {
    async listAllProducts(require, response) {
        const todosOsProdutos = await Product.findAll();
        console.log('Recuperando todos os produtos', todosOsProdutos)
        return response.status(200).json(todosOsProdutos)
    }
}

export default new ProductController();