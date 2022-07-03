
const express=require('express');
const bodyParser = require('body-parser');

const app=express();

// it takes the incoming requests and process (parse it).
app.use(bodyParser.urlencoded({extended:false}));

app.use( '/add-product' ,(req,res,next)=>{
    //console.log('in the middleware function');
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">send</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body.title);  //print the body of request
    res.redirect('/');
});

app.use('/', (req,res,next)=>{
    //console.log('In another middleware!');
    res.send('<h1> hello to node js </h1>');
});

app.listen(4000); 

