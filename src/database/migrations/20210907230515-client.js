'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      clientFirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clientLastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clientCpf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      clientCnpj: {
        type: Sequelize.STRING,
        allowNull: true
      },
      clientBirthDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      clientEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clientPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clientPhone: {
        type: Sequelize.STRING,
        allowNull: true
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
