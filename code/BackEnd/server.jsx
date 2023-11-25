const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Shipper = require('./models/Shippers');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));


mongoose.connect('mongodb://localhost:27017/freightJoint', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
    try {
      const newShipper = new Shipper(req.body);
      await newShipper.save();
      res.status(201).send('Shipper registered successfully');
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).send('Error registering shipper: ' + error.message);
    }
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});