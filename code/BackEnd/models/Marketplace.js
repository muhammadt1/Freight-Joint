const mongoose = require('mongoose');

const marketplaceSchema = new mongoose.Schema({
  selectedUnit: String,
  selectedType: String,
  pickUpLocation: String,
  pickUpDate: String,
  pickUpTime: String,
  dropOffDate: String,
  dropOffTime: String,
  dropOffLocation: String,
  additionalInfo: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});
const Marketplace = mongoose.model('Marketplace', marketplaceSchema);
module.exports = Marketplace;