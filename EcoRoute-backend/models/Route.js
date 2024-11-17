const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  distance: String,
  duration: String,
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
