'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
        productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
        storeID: {
        type: Sequelize.INTEGER,
        references: { model: 'lojas', key: 'storeID'},
        allowNull: false
      },
        productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
        categoryName: {
        type: Sequelize.STRING,
        allowNull: false
      },
        quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
        imageURL: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedIn: {
        type: Sequelize.DATE,
        allowNull: false
      }
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
