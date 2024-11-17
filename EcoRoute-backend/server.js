require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const Route = require('./models/Route');

app.get('/', (req, res) => {
  res.send('Welcome to EcoRoute Backend!');
});

app.post('/get-route', async (req, res) => {
  const { origin, destination } = req.body;

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        origin,
        destination,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.routes.length === 0) {
      return res.status(400).json({ error: 'No route found' });
    }

    const routeData = response.data.routes[0].legs[0];
    const { distance, duration } = routeData;

    const newRoute = new Route({
      origin,
      destination,
      distance: distance.text,
      duration: duration.text,
    });

    await newRoute.save();
    res.json({ origin, destination, distance: distance.text, duration: duration.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching route' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
