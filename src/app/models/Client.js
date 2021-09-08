import Sequelize, { Model } from 'sequelize';

class Client extends Model {
    static init(sequelize) {
        super.init({
            clientId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            cpf: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            birthDate: Sequelize.DATE,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            phone: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            sequelize,
            underscored:false,
            tableName:"clients"
        });
        return this;
    }
}

export default Client