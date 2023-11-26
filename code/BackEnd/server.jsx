const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Shipper = require('./models/Shippers');
const Carrier = require('./models/Carriers');
const Marketplace = require('./models/Marketplace');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect('mongodb://localhost:27017/freightJoint', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/activeloads", async (req, res) => {
  try {
    const loads = await Marketplace.find();
    res.json(loads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
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

app.post('/login', async (req, res) => {
  try {
    console.log("Login Request Received:", req.body);
    
    const { username, password } = req.body;

    let user = await Shipper.findOne({ email: username }) || await Carrier.findOne({ email: username });
    console.log("User found:", user);

    if (!user) {
      console.log("No user found with this email");
      return res.status(401).send('Invalid credentials');
    }

    if (password !== user.confirmPassword) {
      console.log("Password does not match");
      return res.status(401).send('Invalid credentials');
    }

    const userType = user instanceof Shipper ? 'shipper' : 'carrier';

    console.log("Login successful for user:", user._id);
    res.send({ message: 'Login successful', user: user._id, userType });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send('Error in login: ' + error.message);
  }
});

app.post("/postload", async(req, res) => {
  try {
    const selectedUnit = req.body.selectedUnit;
    const selectedType = req.body.selectedType;
    const pickUpLocation = req.body.pickUpLocation;
    const pickUpDate = req.body.pickUpDate;
    const pickUpTime = req.body.pickUpTime;
    const dropOffDate = req.body.dropOffDate;
    const dropOffTime = req.body.dropOffTime;
    const dropOffLocation = req.body.dropOffLocation;

    // Create Shipper instance
    const load = new Marketplace({
      selectedUnit,
      selectedType,
      pickUpLocation,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
      dropOffLocation,
    });

    // Save Shipper to the database
    const savedLoad = await load.save();
    res.json(savedLoad);
    
  } catch (err) {
    res.json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
