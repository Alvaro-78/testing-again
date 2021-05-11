'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	
	class Product extends Model {
	
		static associate(models) {

			// this.belongsTo(models.Cart, {
			// 	foreignKey: "cartId",
			// });						
		}
	};

	Product.init({
		stock: DataTypes.INTEGER,
		category: DataTypes.STRING,
		name: DataTypes.STRING,
		size: DataTypes.STRING,
		description: DataTypes.TEXT,
		price: DataTypes.INTEGER,
		picture: DataTypes.STRING,
		creation_date: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Product',
	});

	return Product;
};