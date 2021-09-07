'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('lojas', {
      storeID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      addressName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressCEP: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressCity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressState: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
