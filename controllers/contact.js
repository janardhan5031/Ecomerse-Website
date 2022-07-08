
exports.contactUsForm=(req,res,next)=>{
    res.render('contact',{pageTitle:'contact',path:'/contactus'});
}

exports.formSuccess=(req,res,next)=>{
    res.redirect('/submited');
}

exports.formSubmited=(req,res,next)=>{
    res.render('success',{pageTitle:'success'});
}