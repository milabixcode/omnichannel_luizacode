import Sequelize, { Model } from 'sequelize';

class Inventory extends Model {
    static init(sequelize) {
        super.init({
            inventoryId: {
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
            tableName:"tb_inventory"

        });
        return this;
    }
};

export default Inventory