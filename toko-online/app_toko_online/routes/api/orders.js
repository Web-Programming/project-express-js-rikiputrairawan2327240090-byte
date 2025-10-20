const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/order');

// [POST] Buat order baru
router.post('/', orderController.createOrder);

// [GET] Ambil semua order (dengan populate user dan product)
router.get('/', orderController.getAllOrders);

// [PUT] Update status order
router.put('/:id/status', orderController.updateOrderStatus);

module.exports = router;