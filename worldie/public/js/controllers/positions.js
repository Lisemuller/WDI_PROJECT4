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
    
    // panorama.setPosition();
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
      position: getLatLng(self.all[1]),
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      addressControl: false,
      linksControl: false,
    });
    
  });

  
}