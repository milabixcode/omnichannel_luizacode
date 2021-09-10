import Sequelize, { Model } from 'sequelize';

class Store extends Model {
    static init(sequelize) {
        super.init({
            storeId: {
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
            tableName:"store"

        });
        return this;
    }
    static associate(models){
        this.belongsTo( models.Adress, { foreignKey: 'adressId', as: 'Adress'})
    }
};

export default Store