const mongoose = require('mongoose');

const marketplaceSchema = new mongoose.Schema({
  selectedUnit: String,
  selectedType: String,
  pickUpLocation: String,
  pickUpDate: String,
  pickUpTime: String,
  dropOffDate: String,
  dropOffDate: String,
  dropOffLocation: String,
});

const Marketplace = mongoose.model('marketplace', marketplaceSchema);
module.exports = Marketplace;