const path=require('path');

const express=require('express');
const router=express.Router();

router.get( '/add-product' ,(req,res,next)=>{
    //console.log('in the middleware function');
    res.sendFile(path.join(__dirname,'../','views','add products.html'));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body.title,req.body.volume);  //print the body of request
    res.redirect('/');
});

module.exports= router;
