var mongoose = require('mongoose');

var positionSchema = mongoose.Schema({
  lat: { type: Number, unique: true, required: true },
  lng:    { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Position", positionSchema);