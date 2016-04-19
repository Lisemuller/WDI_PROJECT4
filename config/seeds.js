var Position = require('../models/position');
var databaseURL    = process.env.MONGODB_URI || 'mongodb://localhost/wordie';
mongoose.connect(databaseURL);

Position.collection.drop();

Position.create([{
  lat: 41.005855,
  lng: 28.976835,
  country: "Turkey",
  city: "Istanbul",
},{
  lat: 1.285872,
  lng: 103.854256,
  country: "Singapore",
  city: "Singapore",
},{
  lat: 25.195288,
  lng: 55.276433,
  country: "United Arab Emirates",
  city: "Dubai",
},{
  lat: 45.434426,
  lng: 12.334747,
  country: "Italy",
  city: "Venice",
},{
  lat: 48.861847,
  lng: 2.289974,
  country: "France",
  city: "Paris",
}]

, function(err, positions) {
  if(err) console.error(err);
  else console.log(positions);
  mongoose.connection.close();
});

