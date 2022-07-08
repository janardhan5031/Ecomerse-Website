
const express=require('express');
//importing product controller
const productsController=require('../controllers/products');

const router=express.Router();

// get the add-products html page through the controller
router.get( '/add-product' ,productsController.addProducts);

router.post('/product',productsController.postProducts);

module.exports= router;

