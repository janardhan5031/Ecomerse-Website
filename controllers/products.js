
const products=[];

exports.addProducts=(req,res,next)=>{
    res.render('add-products',{pageTitle:'add products'});
}

exports.postProducts=(req,res,next)=>{
    products.push({title:req.body.title,volume:req.body.volume});
    //console.log(req.body.title,req.body.volume);  //print the body of request
    res.redirect('/');
}

exports.displayingProducts=(req,res,next)=>{

    console.log(products);
    
    res.render('shop',{prods:products, pageTitle:'shop'});

    //res.sendFile(path.join(__dirname,'../','/views','/shop.html'));
}