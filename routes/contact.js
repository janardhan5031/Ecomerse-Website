const express=require('express');
const path= require('path');

const route=express.Router();

route.get('/contactus', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact us.html'));
});

route.post('/success',(req,res,next)=>{
    res.redirect('/submited');
});

route.get('/submited', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'));
});

module.exports=route;