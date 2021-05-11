'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return[
      queryInterface.addColumn(
        'Carts', 
        'productId', 
        {
          type: Sequelize.INTEGER,
          references: {
              model: 'Products',
              key: 'id' 
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }),
        queryInterface.addColumn(
          'Carts', 
          'customerId', 
          {
            type: Sequelize.INTEGER,
            references: {
                model: 'Customers',
                key: 'id' 
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }),
  
    ]
  },

  down: async (queryInterface, Sequelize) => {
 
  }
};
