import Sequelize, { Model } from 'sequelize';
//import bcrypt from 'bcryptjs';


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
            cpf: {
                type: Sequelize.STRING,
                unique: true
            },
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
        // this.addHook('beforeSave', async client => {
        //     if(client.password){
        //       client.password_hash = await bcrypt.hash(client.password, 10)
        //     }
        // })
        return this;
    }
    static associate(models){
<<<<<<< HEAD
        this.belongsTo( models.Adress, { foreignKey: 'adressId', as: 'address'})
=======

        this.belongsTo( models.Adress, { foreignKey: 'addressId', as: 'address'})
>>>>>>> 36b83f0b6a86ef1988e0f864f770616aa6573473
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
      }
}

export default Client