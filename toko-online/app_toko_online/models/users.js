// Import mongoose
const mongoose = require('mongoose');

// Definisikan Schema untuk User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Format email tidak valid']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  address: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Membuat model dari schema
const User = mongoose.model('User', userSchema);

// Export model agar bisa digunakan di file lain
module.exports = User;