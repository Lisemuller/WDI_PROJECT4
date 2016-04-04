angular
  .module('WorldieApp')
  .controller('PositionsController', PositionsController)

PositionsController.$inject = ['$window','Position'];
function PositionsController($window, Position){

  var self = this;

  console.log(document.getElementById('street-view'));

  function getLatLng(position) {
    return new google.maps.LatLng(position.lat, position.lng);
  }



  self.all = [];
  Position.query(function(positions) {
    self.all = positions;
    

  

  function getPanorama(){
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
      position: getLatLng(self.all[Math.floor(Math.random()*self.all.length)]),
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      addressControl: false,
      linksControl: false,
    }); 

    var lat = panorama.position.lat()
    var lng = panorama.position.lng()


    var geocoder = new google.maps.Geocoder;
    var latlng = {lat: lat , lng: lng };
          console.log(latlng);
          geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                var marker = new google.maps.Marker({
                  position: latlng });
                var country = (results[1].formatted_address);
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
            console.log(country);
          });
  }

getPanorama();
    

  });

}


