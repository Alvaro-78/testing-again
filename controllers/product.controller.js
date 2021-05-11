const {Product} = require('../models');

class ProductController {

    //List Products
    async indexAll() {
        return Product.findAll();
    }


    async updateProduct(id) {
        return productController.updateProduct({where:{id}})
    }

};

let productController = new ProductController();

module.exports = productController;