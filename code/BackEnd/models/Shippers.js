const mongoose = require('mongoose');
const shipperSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true, 
  },
  contactName: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});
const Shipper = mongoose.model('Shipper', shipperSchema);
module.exports = Shipper;