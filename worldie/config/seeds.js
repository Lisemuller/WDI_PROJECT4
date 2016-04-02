var Position = require('../models/position');
var mongoose = require('mongoose');

Position.collection.drop();

Position.create([{
  lat: 47.869260,
  lng: -150.254811,
},{
  lat: 37.869260,
  lng: -122.254811,
},{
  lat: 57.869260,
  lng: -112.254811,
},{
  lat: 67.869260,
  lng: -152.254811,
}], function(err, positions) {
  if(err) console.error(err);
  else console.log(positions);
  mongoose.connection.close();
});
