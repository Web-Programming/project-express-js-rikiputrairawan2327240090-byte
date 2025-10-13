var products = require('../../data/products.json');
var Product = require("../models/products");
const index = async (req, res) => {
 	try {
        //gunakan find({})
        //untuk mengambil seluruh data dari collection
        const prod = await Product.find({}); 
        res.render('index', {
            title: 'Toko Online Sederhana - Ini Dari Mongo DB',
            products: prod
        });
    }catch(err){
        res.status(500).send("Gagal memuat produk");
    }
}; 

const detail = async (req, res) => {
    try{
        //const productId = parseInt(req.params.id); //Tangkap ID dari URL
        //const product = products.find(p => p.id === productId); //Cari produk by id
        
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if(!product){ //jika produk tidak ditemukan
            return res.status(404).send('Produk tidak ditemukan!');
        }
        res.render('product-detail',
            {
                title : product.name,
                product : product
            }
        );
    }catch(err){
        res.status(404).send("Gagal memuat detail produk");
    }
}; 

//membuat rest api
const apiall = async (req, res) => {
 	try {
        const prod = await Product.find({}); 
        res.status(200).json(
            {
                status: true,
                message: "Data produk berhasil diambil",
                data: prod
            });
    }catch(err){
        res.status(500).json({
            status : false,
            message: "Gagal memuat produk"
        });
    }
}; 


const all = async (req, res)=> {

};

//read one /detail product
const detailProduk = async (req, res) => {
try{
  const productId = req.params.id;
  const product = await Product.findById(products);

  if(!product) {
    return res.status(404).json({
      status: false,
      message: "Produk tidak ditemukan",
      data:product
    });
  }
  res.status(200).json({
    status:true,
    message: "Detail produk berhasil diambil",
    data:product
  });

}catch (err) {
  res.status(500).json({
    status: false,
    message: "Gagal memuat detail produk"
  });
}

};

//update data
const remove = async (req, res) => {

};
//create/insert
const create = async (req, res) => {
    try{
        //1. ambil data request body
        const newProduct = new Product ({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock || 0
        })
        //2. simpan data ke nogo db melalui model product
        const product = await newProduct.save();

        //3. klaim respon sukses ke user
        res.status(200).json({
            status: true,
            message: "Produk berhasil disimpan",
            data: product
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }

};

module.exports = {
    index, detail,
    all, create,
    detailProduk
};

