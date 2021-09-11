'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('tb_inventory', 'product', {
      type: Sequelize.INTEGER,
      allowNull: true
    })

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
