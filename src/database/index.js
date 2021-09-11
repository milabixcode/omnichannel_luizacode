import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

import Product from '../app/models/Product';
import Client from '../app/models/Client';
import Store from '../app/models/Store';
import Adress from '../app/models/Adress';
import Inventory from '../app/models/Inventory';
import Order from '../app/models/Order';
import Item from '../app/models/Item';

import cls from 'cls-hooked';

const models = [ Product, Client, Store, Adress, Inventory, Order, Item];

class Database{
    constructor(){
        this.init()

    }
    init(){
        this.namespace = cls.createNamespace('nans-omni');
        Sequelize.useCLS(this.namespace);
        this.connection = new Sequelize(databaseConfig);

        models
            .map( model => model.init(this.connection))
            .map( model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database();
