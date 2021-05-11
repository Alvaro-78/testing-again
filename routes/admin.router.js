const router = require('express').Router({mergeParams:true});
const adminController = require('../controllers/admin.controller');
const productController = require ('../controllers/product.controller');

router.post('/', async (req,res) => {

    try{
        res.json(await adminController.createAdmin(req.body));

    }catch(error){
        res.status(500).json({
          error: 'error',
          message: 'error'
        });
    };
});

// UPDATE ADMIN

router.put('/:id', async (req,res) => {
    try{
      const body = req.body;
      res.json(await adminController.updateAdmin(body, req.params.id));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
});

  // DELETE CUSTOMER

router.delete('/:id', async (req,res) => {
    try{
      res.json(await adminController.deleteAdmin(req.params.id));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
});

router.post('/login',async (req,res) => {

    try {
        const {email,password} = req.body;
        const jwt = await adminController.login(email,password);
        const token = jwt.token
        const admin = jwt.admin 
        res.json({token, admin})
    } catch (error) {
        return res.status(401).json({
        message: error.message
        });
    };
});


router.get('/logout/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const user =  await adminController.logOut(id);
        const status = `Eat a lot of sugar we want see you as soon as possible, ${user.firstName}`;
        
        res.json({ status, id, date:new Date }); 
        
    }catch (error) {
        console.log(error)
    };
});

router.get('/', async(req,res) => {
    
    try {
        res.json(await adminController.indexAll());
    } catch (error) {
        console.log(error);
        res.status(500).json({
          error: 'error',
          message: 'error'
        });
    }
})


// Admin CRUD for Products

//Create products

router.post('/create-product', async(req,res) => {
    try {
        res.json(await adminController.createProduct(req.body));
    } catch (error) {
         
        console.log(error,"Esto es el ERRORRRR")
    }
})

router.get('/products', async(req,res) => {
    
    try {
        res.json(await adminController.indexAllProduct());
    } catch (error) {
        console.log("error del get",error);
    }
})

router.delete('/products/:id', async (req,res) => {
    try{
      res.json(await adminController.deleteProduct(req.params.id));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
  });



module.exports = router;