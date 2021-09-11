'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('tb_orders', 'client', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
    queryInterface.changeColumn('tb_orders', 'adress', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
    return queryInterface.changeColumn('tb_orders', 'paymentType', {
      type: Sequelize.STRING,
      allowNull: true
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
