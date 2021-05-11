const { Cart } = require('../models');


class CartController {
 //Necesito añadir el id del product y del customer

    // CREATE CART
    async createCart(cart, productId) {

        return Cart.create(cart)
    };

}

let cartController = new CartController();

module.exports = cartController;