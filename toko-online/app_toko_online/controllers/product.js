var products = require("../data product.json");
var products = require("../models/products");
const index = async (req, res) => {
  try {
    const prod = await products.find({});
    res.render("index", {
      title: "Toko online sederhana",
      products: prod,
    });
  } catch (err) {
    res.status(500).send("gagal memuat produk");
  }
};

const detail = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return res.status(404).send("Produk tidak tersedia");
    }
res.render("product-detail", {
      title: product.name,
      product: product,
    });
  } catch (err) {
    res.status(500).send("gagal memuat produk");
  }
};

module.exports = {index, detail};