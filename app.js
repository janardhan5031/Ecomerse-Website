
const express=require('express');

const app=express();

app.use( '/add-product' ,(req,res,next)=>{
    console.log('in the middleware function');
    res.send('<h1>this is add-product page</h2>');
});

app.use('/', (req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1> hello to node js </h1>');
});

app.listen(4000); 

