angular
  .module('WorldieApp')
  .controller('PositionsController', PositionsController)

PositionsController.$inject = ['$window','Position'];
function PositionsController($window, Position){

  var self = this;
  var time = 30;
  var timer;
  var player = 1;
  var player1 = 0;

  function getLatLng(position) {
    return new google.maps.LatLng(position.lat, position.lng);
  }

  self.all = [];

  Position.query(function(positions) {
    self.all = positions;

    var country;
    // get a random street view from the seeds
    function getPanorama(){
      var index = [Math.floor(Math.random()*self.all.length)];
      var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
        position: getLatLng(self.all[index]),
        pov: {heading: 165, pitch: 0},
        zoom: 1,
        addressControl: false,
        linksControl: false,
      }); 

    country = (self.all[index]).country;
    console.log(country);  

    }


    getPanorama(); 

    console.log(country)

    var text;
    // check if the answer is correct
    function matchCountry(text, country) {
      console.log(text);
      console.log(country);
      if (country === text){
        console.log("Well done !")
          if(player === 1) {
            player1++;
            time === 0;
            getPanorama();
          } 
      } else {
        console.log("Sorry, please try again");
      }
      $('.score1').text("Player 1 - "+ player1);

      };

    $('#new-country-form').on("submit", function(event) {
      event.preventDefault();
      var text = $("#new-country-input").val();
      $("#new-country-input").val("");
      matchCountry(text, country); 
    });


    function startClock() {
      console.log("start clock");
      var display = $('#screen');


      // text box only shows when timer starts
      $('#screen').removeClass('hidden');
      $('#new-country-input').removeClass('hidden');
      timer = setInterval(function(){
        time -= 1;

        minutes = Math.floor(time / 60);
        seconds = time % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
        
        if(time === 0) {
          clearInterval(timer)
          getPanorama();
          time = 30;

        }
      }, 1000)
    }
    //Button click starts the timer and makes the button disapear
    $('.play').on("click", function() {
      $('.welcome-screen').addClass('hidden');
      startClock();
      setTimeout(function() {
       console.log("Time out !")
      }, 180000); 
    }); 
    
  });

}


