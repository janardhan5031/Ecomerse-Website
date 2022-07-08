const path=require('path')

const express=require('express');
const bodyParser = require('body-parser');  //importing body-parser module
const errorcontroller=require('./controllers/error');
//importing the error controller to handel 404 page

const app=express();


app.set('view engine', 'ejs');  //template engine to render the pug files
app.set('views','views');   //folder to see the pug file by the engine


const adminRountes=require('./routes/admin');
const shopRouter=require('./routes/shop');
const contact=require('./routes/contact');


// it takes the incoming requests and process (parse it).
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));   
//create path to access the css files in html pages


app.use(adminRountes);
app.use(shopRouter);
app.use(contact);

app.use(errorcontroller.error404page);

app.listen(4000); 

