
const express=require('express');
const router=express.Router();

router.get( '/add-product' ,(req,res,next)=>{
    //console.log('in the middleware function');
    res.send('<form action="/admin/product" method="post">product name<input type="text" name="title"><br>volume<input type="text" name="volume"><button type="submit">send</button></form>');
});

router.post('/product',(req,res,next)=>{
    console.log(req.body.title,req.body.volume);  //print the body of request
    res.redirect('/');
});

module.exports= router;
