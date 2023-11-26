const mongoose = require('mongoose');
const marketplaceSchema = new mongoose.Schema({
  pickuplocation: {
    type: String,
    required: true,
  },
  pickupdate: {
    type: String,
    required: true,
  },
  pickuptime: {
    type: String,
    required: true,
  },
  dropoffdate: {
    type: String,
    required: true,
  },
  dropofftime: {
    type: String,
    required: true,
  },
  dropofflocation: {
    type: String,
    required: true,
  },
  unitRequested: {
    type: String,
    required: true,
  },
  typeLoad: {
    type: String,
    required: true,
  },
  sizeLoad: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  additionalDoc: {
    type: String,
  },
});
const Marketplace = mongoose.model('Marketplace', marketplaceSchema);
module.exports = Marketplace;