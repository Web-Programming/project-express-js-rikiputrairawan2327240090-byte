var express = require("express");
var router = express.router();
var product = require("../data/products.json");

router.get("/:id",function(req,res,next) {
    const productid = parseInt(req,URLSearchParams,id);//tangkap ID dari URl
    const product = products.find

    if(product){
        return res.status(404).send('Produk tidak ditemukan');
    }
    res.render('prodct-detail'),
    {
        title:product.name,
        product : product
    }
    
});
module.exports = router;s