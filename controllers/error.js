
exports.error404page=(req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found'}); 
}