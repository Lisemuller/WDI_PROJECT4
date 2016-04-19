var mongoose = require('mongoose');

var scoreSchema = mongoose.Schema({
  score: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Score', scoreSchema);