const router = require('express').Router({mergeParams:true});
const { updateProduct } = require('../controllers/product.controller');
const productController = require ('../controllers/product.controller')


router.get('/', async(req,res) => {
    
    try {
        console.log("entraaaaaaa")
        res.json(await productController.indexAll());
    } catch (error) {
        console.log(error);
        res.status(500).json({
          error: 'error',
          message: 'error'
        });
    }
});

router.put('/:id', async (req,res) => {
    try{
      const body = req.body;
      res.json(await customerController.updateProduct(body, req.params.id));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
  });




module.exports = router;