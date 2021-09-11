'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tb_stores', 'adresses', {
        type: Sequelize.INTEGER,
        references: { model: 'tb_adresses', key: 'adressId'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    )
  },  

  down: async (queryInterface, Sequelize) => { 
    return queryInterface.dropTable('stores', 'adress_id');
  }

}
