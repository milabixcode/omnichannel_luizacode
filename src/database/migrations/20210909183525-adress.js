'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('adresses', {
      adressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      adressName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adressNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      adressCep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adressCity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adressState: {
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
