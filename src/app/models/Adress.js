import Sequelize, { Model } from 'sequelize';

class Adress extends Model {
    static init(sequelize) {
        super.init({
            adressId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            adressName: Sequelize.STRING,
            adressNumber: Sequelize.INTEGER,
            adressCEP: Sequelize.STRING,
            adressCity: Sequelize.STRING,
            adressState: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        {
            sequelize,
            underscored:false,
            tableName:"adresses"

        });
        return this;
    }
}

export default Adress;