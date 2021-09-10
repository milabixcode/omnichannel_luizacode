'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_orders', {
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      client: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_clients', key: 'clientId'},
        allowNull: false,
      },
      adress: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_adresses', key: 'adressId'},
        allowNull: false,
      },
      valueFreight: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      statusDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
  }
};
