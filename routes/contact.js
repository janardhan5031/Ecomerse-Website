const express=require('express');
const path= require('path');

const route=express.Router();

route.get('/contactus', (req,res,next)=>{
    res.render('contact',{doctTitle:'contact',path:'/contactus'});
});

route.post('/success',(req,res,next)=>{
    res.redirect('/submited');
});

route.get('/submited', (req,res,next)=>{
    res.render('success');
});

module.exports=route;