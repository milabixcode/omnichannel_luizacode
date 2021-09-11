import Sequelize, { Model } from 'sequelize';
import Inventory from './Inventory';
import Item from './Item';

class Product extends Model {
    static init(sequelize) {
        super.init({
            productId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productName: Sequelize.STRING,
            categoryName: Sequelize.STRING,
            imageUrl: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            sequelize,
            underscored:false,
            tableName:"tb_products"

        });
        return this;
    }
    static associate(models){
        this.belongsToMany( models.Store, {through: Inventory, foreignKey: 'product'})
        this.belongsToMany(models.Order, {through:Item, foreignKey:'product'})
    }
}


export default Product