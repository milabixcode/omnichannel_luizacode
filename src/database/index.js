import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Product from '../app/models/Product';
import Client from '../app/models/Client';
import Store from '../app/models/Store';

const models = [ Product, Client, Store ];

class Database{
    constructor(){
        this.init()

    }
    init(){
        this.connection = new Sequelize(databaseConfig);

        models
            .map( model => model.init(this.connection))
            .map( model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database();
