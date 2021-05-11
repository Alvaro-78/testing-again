'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    static associate(models) {

      this.belongsTo(models.Customer, {
        foreignKey: "customerId",
      });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
      })
    }
  };

  Order.init({
    order_date: DataTypes.DATE,
    shipping_costs: DataTypes.INTEGER,
    total_order: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    shipping_date: DataTypes.DATE,
    tracking_number: DataTypes.STRING,
    order_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};