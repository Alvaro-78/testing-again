'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return [
      
    //   queryInterface.addColumn(
    //     'AdminId', 
    //     {
    //         type: Sequelize.INTEGER,
    //         references: {
    //             model: 'Admins', 
    //             key: 'id' 
    //         },
    //         onUpdate: 'CASCADE',
    //         onDelete: 'SET NULL'
    //     }),
        queryInterface.addColumn(
            'Customers', 
            'cartId', 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Carts', 
                    key: 'id' 
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }),
        queryInterface.addColumn(
            'Customers', 
            'orderId', 
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Orders', 
                    key: 'id' 
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }),
        ];
  },

  down: async (queryInterface, Sequelize) => {
  
  }
};
