const path=require('path');

const express=require('express');

const admindata=require('./admin'); //importing the admin file to show to user

const router=express.Router();

router.get('/', (req,res,next)=>{
    //console.log('In another middleware!');
    const prdcts=admindata.products;

    console.log(admindata.products);
    
    res.render('shop',{products:prdcts, docTitle:'shop', path:'/'});

    //res.sendFile(path.join(__dirname,'../','/views','/shop.html'));
});

module.exports=router;