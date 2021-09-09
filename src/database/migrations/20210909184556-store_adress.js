'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stores', 'adresses', {
        type: Sequelize.INTEGER,
        references: { model: 'adresses', key: 'adressId'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      }
    )
  },  

  down: async (queryInterface, Sequelize) => { 
    return queryInterface.dropTable('stores', 'adress_id');
  }

}
