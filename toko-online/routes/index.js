var express = require('express');
var router = express.Router();
var product= require('../data/product.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toko Madura',product: product});
});

module.exports = router;
