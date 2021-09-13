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
        this.belongsTo(models.Product, { foreignKey: 'product', as: 'referenceProduct'})
    }

};

export default Item