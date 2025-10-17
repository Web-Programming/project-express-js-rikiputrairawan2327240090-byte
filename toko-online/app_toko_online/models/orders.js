// Import mongoose
const mongoose = require('mongoose');

// Definisikan Schema untuk Order
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Relasi ke model User
    required: true
  },
  items: [
    {
      productName: {
        type: String,
        required: true,
        trim: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Buat model dari schema
const Order = mongoose.model('Order', orderSchema);

// Export model agar bisa digunakan di file lain
module.exports = Order;