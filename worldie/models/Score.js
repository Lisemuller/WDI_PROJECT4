var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  score: Number,
  user: { type: mongoose.Schema.ObjectId }
});

module.exports = mongoose.model('User', userSchema);