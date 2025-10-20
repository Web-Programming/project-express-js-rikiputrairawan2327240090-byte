const Order = require('../models/order');
const User = require('../models/user'); // hanya jika perlu
const Product = require('../models/product'); // hanya jika perlu

// Membuat order baru
exports.createOrder = async (req, res) => {
    try {
        const { user, orderItems } = req.body;

        // Validasi sederhana
        if (!user || !orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: 'Data tidak lengkap' });
        }

        const newOrder = new Order({
            user,
            orderItems,
            status: 'Pending',
        });

        await newOrder.save();

        res.status(201).json({
            message: 'Order berhasil dibuat',
            data: newOrder,
        });
    } catch (error) {
        res.status(500).json({ message: 'Gagal membuat order', error: error.message });
    }
};

// Mendapatkan semua order dengan populate
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'name email') // populate user (nama dan email saja)
            .populate('orderItems.product', 'name price'); // populate produk (nama dan harga)

        res.status(200).json({
            message: 'Data order berhasil diambil',
            data: orders,
        });
    } catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data order', error: error.message });
    }
};

// Mengupdate status pesanan
exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order tidak ditemukan' });
        }

        order.status = status;
        await order.save();

        res.status(200).json({
            message: 'Status order berhasil diperbarui',
            data: order,
        });
    } catch (error) {
        res.status(500).json({ message: 'Gagal memperbarui status order', error: error.message });
    }
};