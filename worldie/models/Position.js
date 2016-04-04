var mongoose = require('mongoose');

var positionSchema = mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  country: {type: String},
});

positionSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model("Position", positionSchema);