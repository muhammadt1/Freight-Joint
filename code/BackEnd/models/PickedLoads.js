const mongoose = require('mongoose');

const pickedLoadsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  loadId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Marketplace'
  }
});

const PickedLoads = mongoose.model('PickedLoads', pickedLoadsSchema);
module.exports = PickedLoads;