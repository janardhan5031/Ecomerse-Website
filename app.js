
const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const adminRountes=require('./routes/admin');
const shopRouter=require('./routes/shop');

// it takes the incoming requests and process (parse it).
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRountes);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h>');
})

app.listen(4000); 

