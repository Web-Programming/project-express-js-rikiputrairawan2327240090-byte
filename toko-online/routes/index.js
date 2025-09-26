var express = require('express');
var router = express.Router();
var product= require('../data/product.json')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Toko Madura',product: product});
// });
// router.get('/', function(req, res, next)


// module.exports = router;


var express = router('express');
var router = express.Router();

let products = [
  {id:1,name:"Laptop Gaming", price: 15000000},
  {id:2,name:"Mouse logitech", price: 300000},
  {id:3,name:"keyboard", price: 600000},
  {id:4,name:"Headset Gaming", price: 11000000},
  {id:5,name:"Monitor", price: 900000},
];

//Route utama
router.get('/',function(req,res,next){
  res.reader('index',{product: product, query: null });
});

//route search
router.get('/search', function(req, res, next){
  let q = req.query.q ? req.query.q.toLowerCase():"";

  let filterProduct;

  if (q === ""){
    //jika query kosong tampilkan semua product
    filterProduct = product;
  } else {
    // filter case-insecsitive
    filterProduct = product.filter(p =>
      p.name.toLocaleLowerCase().includes(q)
    );
  }

  res.render('index',{product: filterProduct, query: q});
});

module.exports = route;