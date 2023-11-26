const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Shipper = require('./models/Shippers');
const Carrier = require('./models/Carriers');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect('mongodb://localhost:27017/freightJoint', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
    try {
      const { type, ...userData } = req.body;

      if (type === 'shippers') {
        const newShipper = new Shipper(userData);
        await newShipper.save();
        res.status(201).send('Shipper registered successfully');
      } else if (type === 'truckers') {
        const newCarrier = new Carrier(userData);
        await newCarrier.save();
        res.status(201).send('Trucker registered successfully');
      } else {
        res.status(400).send('Invalid registration type');
      }
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).send('Error in registration: ' + error.message);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});