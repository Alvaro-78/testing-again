'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    
    static associate(models) {

      this.belongsTo(models.Product, {
        foreignKey: "productId",
      });

      this.belongsTo(models.Customer, {
        foreignKey: "customerId"
      })
    }
  };

  Cart.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  
  return Cart;
};