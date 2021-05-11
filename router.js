const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const adminRouter = require('./routes/admin.router');
const productRouter = require('./routes/product.router');
const cartRouter = require('./routes/cart.router');

router.use('/customers', customerRouter);
router.use('/admins', adminRouter);
router.use('/products', productRouter);
router.use('/carts', cartRouter);

module.exports = router;