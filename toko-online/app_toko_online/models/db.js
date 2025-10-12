//install paket mogoose menggunakan npm npm install mongoose
const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/paw2-si5c";

mongoose.connect(dbURI, {});
mongoose.connection.on("connected", () => {
    console.log(Mongoose connected to ${dbURI});
});
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});
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
    const
 }   
};


module.exports = {index, detail};