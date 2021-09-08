import { response } from 'express';
import * as Yup from 'yup';
import Store from '../models/Store';

class StoreController {
    async listAllStores(require, response) {
        const allStores = await Store.findAll();
        console.log('Recuperando todas as lojas', allStores);
        return response.status(200).json(allStores);
    }
}

export default new StoreController();