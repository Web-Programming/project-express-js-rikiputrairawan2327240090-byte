var express = require("express");
var router = express.Router();
// var products = require("../../data/products.json");
var products = require("../models/products");

router.get("/all", async function (req, res, next) {
  try {
    const prod = await products.find({});
    res.render("index", {
      title: "Toko online sederhana",
      products: prod,
    });
  } catch (err) {
    res.status(500).send("gagal memuat produk");
  }
});
// --- ROUTE LIST PRODUK ---
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Daftar Produk",
    products: products,
    query: "",
  });
});

// --- ROUTE SEARCH (pindahkan ke atas) ---
router.get("/search", function (req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";
  let filteredProducts = products;
 if (q) {
    filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  console.log("Query:", q, "Jumlah hasil:", filteredProducts.length);

  res.render("index", {
    title: q ? Hasil pencarian ${q} : "Toko Online Sederhana",
    products: filteredProducts,
    query: q,
  });
});

// Route detail ulasan produk
router.get("/:productId/review/:reviewId", function (req, res, next) {
  // Tangkap parameter dari URL
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;

  // Kirim data ke view
  res.render("review-detail", {
    title: Ulasan ${reviewId} untuk Produk ${productId},
    productId: productId,
    reviewId: reviewId,
  });
});
// --- ROUTE DETAIL PRODUCT (letakkan setelah route spesifik) ---
router.get("/:id", function (req, res, next) {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Produk tidak tersedia");
  }

  res.render("product-detail", {
    title: product.name,
    product: product,
  });
});

module.exports = router;