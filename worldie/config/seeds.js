var Position = require('../models/position');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wordie');

Position.collection.drop();

Position.create([{
  lat: 41.005855,
  lng: 28.976835,
  country: "Turkey",
},{
  lat: 22.818777,
  lng: 89.547000,
  country: "Bangladesh",
},{
  lat: 37.589846,
  lng: 127.096803,
  country: "South Korea",
},{
  lat: 46.229725,
  lng: 15.154129,
  country: "Slovenia",
},{
  lat: 47.930324,
  lng: 106.911599,
  country: "Mongolia",
}], function(err, positions) {
  if(err) console.error(err);
  else console.log(positions);
  mongoose.connection.close();
});
