const path=require('path');

const express=require('express');

const admindata=require('./admin');

const router=express.Router();

router.get('/', (req,res,next)=>{
    //console.log('In another middleware!');
    //console.log('shop.js', admindata.products);
    res.render('shop');
    //res.sendFile(path.join(__dirname,'../','/views','/shop.html'));
});

module.exports=router;