'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', {
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'clientId'},
        allowNull: false,
      },
      createdIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentNames: {
        type: Sequelize.STRING,
        allowNull: false
      },
      statusDescription: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressType: {
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
      addressNeighborhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalValue: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      shippingEstimateDate: {
        type: Sequelize.DATE,
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
