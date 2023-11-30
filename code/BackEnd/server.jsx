const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Shipper = require('./models/Shippers');
const Carrier = require('./models/Carriers');
const Marketplace = require('./models/Marketplace');
const PickedLoads = require('./models/PickedLoads');
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

mongoose.connect('mongodb://localhost:27017/freightJoint', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const session = require('express-session');
app.use(session({
  secret: 'Freight Joint',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.post('/register', async (req, res) => {
  try {
      const { type, username, ...userData } = req.body;
      const existingShipper = await Shipper.findOne({ username });
      if (existingShipper) {
        return res.status(400).send('username already registered as Shipper');
      }
      const existingCarrier = await Carrier.findOne({ username });
      if (existingCarrier) {
          return res.status(400).send('username already registered as Carrier');
      }

      if (type === 'shippers') {
          const newShipper = new Shipper({ username, ...userData });
          await newShipper.save();
          res.status(201).send('Shipper registered successfully');
      } else if (type === 'truckers') {
          const newCarrier = new Carrier({ username, ...userData });
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
    const { username, password } = req.body;
    console.log(`Attempting to log in with username: ${username}`);
    let user = await Shipper.findOne({ username });
    if (!user) {
      user = await Carrier.findOne({ username });
      if (!user) {
        console.log(`No user found with username: ${username}`);
        return res.status(401).send('Invalid credentials');
      }
    }
    if (user.password !== password) {
      console.log(`Invalid password for user with username: ${username}`);
      return res.status(401).send('Invalid credentials');
    }

    req.session.user = { id: user._id, type: user instanceof Shipper ? 'shipper' : 'carrier' };
    console.log(`User logged in: ${req.session.user.type} with ID: ${user._id}`);
    res.send({ message: 'Login successful', user: user._id, userType: req.session.user.type });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send('Error in login: ' + error.message);
  }
});


app.post("/postload", async(req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized - User must be logged in to post loads');
  }
  try {
    const { selectedUnit, selectedType, pickUpLocation, pickUpDate, pickUpTime, dropOffDate, dropOffTime, dropOffLocation, additionalInfo } = req.body;
    const load = new Marketplace({
      selectedUnit,
      selectedType,
      pickUpLocation,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
      dropOffLocation,
      additionalInfo,
      userId: req.session.user.id
    });
    const savedLoad = await load.save();
    res.json(savedLoad);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/activeloads', async (req, res) => {
  if (!req.session.user) {
      return res.status(401).send('Unauthorized - User must be logged in to view active loads');
  }
  try {
      const userID = req.session.user.id;
      const activeLoads = await Marketplace.find({ userId: userID });
      res.json(activeLoads);
  } catch (error) {
      console.error("Error fetching active loads:", error);
      res.status(500).send('Error in fetching active loads: ' + error.message);
  }
});

app.get('/marketplace', async (req, res) => {
  if (!req.session.user) {
      return res.status(401).send('Unauthorized - User must be logged in to view active loads');
  }
  try {
      const activeLoads = await Marketplace.find({});
      res.json(activeLoads);
  } catch (error) {
      console.error("Error fetching active loads:", error);
      res.status(500).send('Error in fetching active loads: ' + error.message);
  }
});

app.post('/pickload', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized - User must be logged in to pick a load');
  }
  const { loadID } = req.body;
  try {
    const pickedLoad = new PickedLoads({
      loadId: loadID,
      userId: req.session.user.id
    });
    await pickedLoad.save();
    res.send({ message: 'Load picked successfully' });
  } catch (error) {
    console.error("Error picking load:", error);
    res.status(500).send('Error in picking load: ' + error.message);
  }
});

app.get('/myloads', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized - User must be logged in to view active loads');
  }

  try {
    const userID = req.session.user.id;
    const activeLoads = await PickedLoads.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(userID) }
      },
      {
        $lookup: {
          from: 'marketplaces',
          localField: 'loadId',
          foreignField: '_id',
          as: 'loadDetails'
        }
      },
      {
        $unwind: '$loadDetails'
      },
      {
        $project: {
          _id: 1,
          'loadDetails.selectedUnit': 1,
          'loadDetails.selectedType': 1,
          'loadDetails.pickUpLocation': 1,
          'loadDetails.pickUpDate': 1,
          'loadDetails.pickUpTime': 1,
          'loadDetails.dropOffDate': 1,
          'loadDetails.dropOffTime': 1,
          'loadDetails.dropOffLocation': 1,
          'loadDetails.additionalInfo': 1,
        }
      }
    ]);

    res.json(activeLoads);
  } catch (error) {
    console.error("Error fetching my loads:", error);
    res.status(500).send('Error in fetching my loads: ' + error.message);
  }
});


app.delete('/deleteload/:loadID', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized - User must be logged in to perform this action');
  }

  try {
    const loadId = req.params.loadID;
    await Marketplace.findByIdAndDelete(new mongoose.Types.ObjectId(loadId));
    res.send({ message: 'Load deleted successfully' });
  } catch (error) {
    console.error("Error deleting load:", error);
    res.status(500).send('Error in deleting load: ' + error.message);
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});