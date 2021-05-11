const router = require('express').Router({mergeParams:true});
const cartController = require('../controllers/cart.controller');


router.post('/:id', async (req,res) => {

    try{
        const product = req.params.productId
        res.json(await cartController.createCart(req.body, product));
    }catch (error) {
        console.log(error)
    };
});

module.exports = router;