import Sequelize, { Model } from 'sequelize';
import Inventory from './Inventory';

class Store extends Model {
    static init(sequelize) {
        super.init({
            storeID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            storeName: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        {
            sequelize,
            underscored:false,
            tableName:"tb_stores"

        });
        return this;
    }
    static associate(models){
        this.belongsTo( models.Adress, { foreignKey: 'adressId', as: 'addressID'})
        this.belongsToMany( models.Product, {through: Inventory, foreignKey: 'store'})
    }
};

export default Store