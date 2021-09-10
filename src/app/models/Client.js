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
            adressId: Sequelize.INTEGER,
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
        // this.addHook('beforeSave', async client => {
        //     if(client.password){
        //       client.password_hash = await bcrypt.hash(client.password, 10)
        //     }
        // })
        return this;
    }
    static associate(models){

        this.belongsTo( models.Adress, { foreignKey: 'adressId', as: 'address'})
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
      }
}

export default Client