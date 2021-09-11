import Sequelize, { Model } from 'sequelize';

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
        this.belongsTo( models.Client, { foreignKey: 'client', as: 'clientId'})
        this.belongsTo( models.Adress, { foreignKey: 'adress', as: 'adressId'})
    }
};

export default Order