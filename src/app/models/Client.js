import Sequelize, { Model } from 'sequelize';


class Client extends Model {
    static init(sequelize) {
        super.init({
            clientId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            addressID: Sequelize.INTEGER,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            cpf: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            birthDate: Sequelize.DATE,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            phone: Sequelize.STRING,
            option: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        {
            sequelize,
            underscored:false,
            tableName:"tb_clients"
        });
        return this;
    };
    static associate(models){
        this.belongsTo( models.Adress, { foreignKey: 'addressID', as: 'address'})
    }
}

export default Client