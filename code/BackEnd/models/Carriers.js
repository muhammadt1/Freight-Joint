const mongoose = require('mongoose');
const carrierSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});
const Carrier = mongoose.model('Carrier', carrierSchema);
module.exports = Carrier;