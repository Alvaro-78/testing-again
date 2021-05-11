'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        
        static associate(models) {

        //     this.hasMany(models.Product, {
        //       foreignKey: "adminId",

        //     });
      
        //     this.hasMany(models.Customer, {
        //       foreignKey: "adminId",
        //     })
          }
    };

    Admin.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Admin',
    });
    return Admin;

};