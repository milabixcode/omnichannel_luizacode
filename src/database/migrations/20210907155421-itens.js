'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('itens', {
      orderId: {
        type: Sequelize.INTEGER,
        references: { model: 'pedidos', key: 'orderId' },
        allowNull: false,
        primaryKey: true
      },
      productID: {
        type: Sequelize.INTEGER,
        references: { model: 'produtos', key: 'productId' },
        allowNull: false,
        primaryKey: true
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      skuName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      valueFrete: {
        type: Sequelize.SMALLINT,
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
