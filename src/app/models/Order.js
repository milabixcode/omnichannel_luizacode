import Sequelize, { Model } from 'sequelize';

class Order extends Model {
    static init(sequelize) {
        super.init({
            orderId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            statusDescription: Sequelize.STRING,
            paymentType: Sequelize.STRING,
            valueFreight: Sequelize.INTEGER,
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
        this.belongsTo( models.Client, { foreignKey: 'clientId', as: 'client'})
        this.belongsTo( models.Adress, { foreignKey: 'adressId', as: 'adress'})
    }
};

export default Order