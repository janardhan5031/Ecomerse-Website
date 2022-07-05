const path=require('path')

const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const adminRountes=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contact=require('./routes/contact');


// it takes the incoming requests and process (parse it).
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));   
//create path to access the css files


app.use(adminRountes);
app.use(shopRouter);
app.use(contact);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views/404 page.html'));
})

app.listen(4000); 

