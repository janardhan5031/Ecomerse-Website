const path=require('path');

const express=require('express');
const router=express.Router();

const products=[];

router.get( '/add-product' ,(req,res,next)=>{
    //console.log('in the middleware function');
    //res.sendFile(path.join(__dirname,'../','views','add products.html'));
    res.render('add-products',{docTitle:'add products', path:'/add-product'});
});

router.post('/product',(req,res,next)=>{
    products.push({title:req.body.title,volume:req.body.volume});
    //console.log(req.body.title,req.body.volume);  //print the body of request
    res.redirect('/');
});

module.exports.routes= router;
module.exports.products=products;
