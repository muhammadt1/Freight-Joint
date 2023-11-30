const mongoose = require('mongoose');
const carrierSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: false,
  },
  contactName: {
    type: String,
    required: true,
    unique: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  confirmPassword: {
    type: String,
    required: true,
    unique: false,
  },
});
const Carrier = mongoose.model('Carrier', carrierSchema);
module.exports = Carrier;