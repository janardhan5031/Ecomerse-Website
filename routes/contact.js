const express=require('express');
const contactController=require('../controllers/contact');

const route=express.Router();

route.get('/contactus', contactController.contactUsForm);

route.post('/success',contactController.formSuccess);

route.get('/submited', contactController.formSubmited);

module.exports=route;