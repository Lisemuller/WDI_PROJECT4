angular
  .module('WorldieApp')
  .controller('PositionsController', PositionsController)

PositionsController.$inject = ['$window','$scope','Position'];
function PositionsController($window, $scope, Position){

  var self = this;
  var time = 180;
  var timer;
  var player1 = 0;

  function getLatLng(position) {
    return new google.maps.LatLng(position.lat, position.lng);
  }

  self.all = [];

  Position.query(function(positions) {
    self.all = positions;

    

    var country;
    var city;
    // get a random street view from the seeds
    function getPanorama(){
      $('#next').addClass('hidden');
      $("#new-country-input").val("");
      $('#new-city-input').addClass('hidden');
      $('#new-city-input').val("");
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

    city = (self.all[index]).city;
    console.log(city);  

    }

    getPanorama(); 

    console.log(country)

    var text;
    var text2;
    // check if the answer country is correct
    function matchCountry(text, country) {
      console.log("USERS TEXT", text);
      console.log("RANDOM COUNTRY", country);
      if (country === text){
        console.log("Well done !");
        player1++;
        $('#next').removeClass('hidden');
        $("#new-country-input").val(text);
        $('#new-city-input').removeClass('hidden');

      } else {
        console.log("Sorry, please try again");
      }

      $('.score1').text("Player  - "+ player1);

      };

    // check if the answer city is correct
    function matchCity(text2,city) { 
      if (city  === text2){
        console.log("Well done !");
        player1++;
        $("#new-city-input").val(text2);
        getPanorama();
      } else {
        console.log("Sorry, wrong city")
      }
      $('.score1').text("Player  - "+ player1);
      };



    // take the input in the box of country and run the function that compares it with the seeds
    $('#new-country-form').on("submit", function(event) {
      event.preventDefault();
      var text = $("#new-country-input").val();
      $("#new-country-input").val("");
      matchCountry(text, country); 
    });

    // take the input in the box of country and run the function that compares it with the seeds
    $('#new-city-form').on("submit", function(event) {
      event.preventDefault();
      var text2 = $("#new-city-input").val();
      $("#new-city-input").val("");
      matchCity(text2, city);
    });

    self.showscreen = true;
    self.newcountryinput = true;


  // start the big clock 
  self.startClock = function() {
    console.log("start clock");
    self.showscreen = false;
    self.newcountryinput = false;


    timer = setInterval(function(){
      time -= 1;

      minutes = Math.floor(time / 60);
      seconds = time % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      
      if(time === 0) {
        console.log("Play Again");
        self.showscreen = true;
        $('.welcome-screen').removeClass('hidden');
        self.newcountryinput = false;
        getPanorama();
      }

      if (time > 0){
          $('.progress-bar').css('width', time+'px');
        } else {
          clearTimeout(timer);
        }

    }, 1000)
  }
    
      


    

    //Button click starts the timer and makes the button disapear
    // $('.play').on("click", function() {
    //   $('.welcome-screen').addClass('hidden');
    //   time = 100;
    //   startClock();
    // }); 
    
    //Button click starts the new panorama and makes the button disapear 
    // $('#next').on("click", function(){
    //   getPanorama();
    // });

  });

}





