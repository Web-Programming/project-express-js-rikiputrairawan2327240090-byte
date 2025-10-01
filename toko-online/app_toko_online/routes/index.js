var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');
const products = require('../data/product.json');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//      title: 'Toko Online Modern', 
//      products: products,
//       query: null //biar bisa dipakai di view
//     });
// });

/* GET search page. */
router.get('/search', function (req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";

  let filteredProducts;
  if (!q) {
    filteredProducts = products; // jika query kosong tampilkan semua
  } else {
    filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  res.render('index', {
    title: 'Hasil Pencarian',
    products: filteredProducts,
    query: q
  });
});

router.get("/", mainController.index);

module.exports = router;
