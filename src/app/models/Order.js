import Sequelize, { Model } from 'sequelize';
import Item from './Item';

class Order extends Model {
    static init(sequelize) {
        super.init({
            orderId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            client: Sequelize.INTEGER,
            adress: Sequelize.INTEGER,
            valueFreight: Sequelize.INTEGER,
            paymentType: Sequelize.STRING,
            statusDescription: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        {
            sequelize,
            underscored:false,
            tableName:"tb_orders"

        });
        return this;
    }
    static associate(models){
        this.belongsTo( models.Client, { foreignKey: 'client'})
        this.belongsTo( models.Adress, { foreignKey: 'adress'})
        this.belongsToMany(models.Product, {through:Item, foreignKey:'order'})
    }
};

export default Order