import Sequelize, { Model } from 'sequelize';

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
            quantity: Sequelize.INTEGER,
            imageUrl: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            sequelize,
        });
        return this;
    }
}

export default Product