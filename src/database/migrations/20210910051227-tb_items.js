'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_items', {
      itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      order: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_orders', key: 'orderId'},
        allowNull: false,
      },
      product: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_products', key: 'productId'},
        allowNull: false,
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
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

