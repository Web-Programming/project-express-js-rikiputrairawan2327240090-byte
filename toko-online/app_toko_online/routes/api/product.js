const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product");

//url create - POST (/api/produk)
router.get("/", productController.all); //done
router.post("/",productController.create);
// url all - GET (/api/produk)
//url read one - detail - GET (/api/produk/:id)
router.get("/:id", productController.detailProduk);
//url update - PUT (/api/produk/:id)
// router.put("/:id", productController.update);
//url delete - DELETE (/api/produk/:id)
// router.delete("/:id", productController.remove);

module.exporst = router;

