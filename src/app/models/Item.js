import Sequelize, { Model } from 'sequelize';

class Item extends Model {
    static init(sequelize) {
        super.init({
            itemId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quantity: Sequelize.INTEGER,
            value: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        {
            sequelize,
            underscored:false,
            tableName:"tb_items"

        });
        return this;
    }
    static associate(models){
        this.belongsTo( models.Order, { foreignKey: 'orderId', as: 'order'})
        this.belongsTo( models.Product, { foreignKey: 'productId', as: 'product'})
    }
};

export default Item