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

  var country;

  var index = [Math.floor(Math.random()*self.all.length)];

  function getPanorama(){
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
      position: getLatLng(self.all[index]),
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      addressControl: false,
      linksControl: false,
    }); 

  country = (self.all[index]).country;
  console.log(country);  

  var text;

  function matchCountry(text, country) {
    console.log(text);
    console.log(country);
    if (country === text){
      console.log("Well done !")
    } else {
      console.log("Sorry, please try again");
    }
    };
  }


    getPanorama(); 

    console.log(country)

    var text;

    function matchCountry(text, country) {
      console.log(text);
      console.log(country);
      if (country === text){
        console.log("Well done !")
      } else {
        console.log("Sorry, please try again");
      }
      };

    $('#new-country-form').on("submit", function(event) {
      event.preventDefault();
      var text = $("#new-country-input").val();
      $("#new-country-input").val("");
      matchCountry(text, country); 
    });
    
  });

}


