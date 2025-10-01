var express = require("express");
var router = express.Router();
var products = require("../data/prodicts.json");

router.get("/:id", function(req,res, next){
    const productId = parselInt(req.params.id); //Tangkap 10 dari URL
    const product = products.find(p => p.id === productId); //Cari produk by ID

    if(!product){
        return res.status(404).send('Produk tidak ditemukan!');
    }

    res.render('product.detail',
        {
            title : product.name,
            product : product 
        }
    );
});
module.exports = router;