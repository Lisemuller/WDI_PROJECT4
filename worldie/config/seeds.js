var Position = require('../models/position');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wordie');

Position.collection.drop();

Position.create([{
  lat: 41.005855,
  lng: 28.976835,
},{
  lat: 22.818777,
  lng: 89.547000,
},{
  lat: 37.589846,
  lng: 127.096803,
},{
  lat: 46.229725,
  lng: 15.154129,
},{
  lat: 47.930324,
  lng: 106.911599,
}], function(err, positions) {
  if(err) console.error(err);
  else console.log(positions);
  mongoose.connection.close();
});
