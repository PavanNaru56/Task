const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/',productController.productsList);
router.use('/plots',require('./plots'));
router.get('/data',productController.data);
module.exports = router;