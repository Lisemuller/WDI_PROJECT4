angular
  .module('WorldieApp')
  .controller('PositionsController', PositionsController)

PositionsController.$inject = ['$window','$scope','Position'];
function PositionsController($window, $scope, Position){

  var self = this;
  var time = 100;
  var timer;
  var player1 = 0;

  function getLatLng(position) {
    return new google.maps.LatLng(position.lat, position.lng);
  }

  self.all = [];

  Position.query(function(positions) {
    self.all = positions;

  self.showscreen = true;
  self.newcountryinput = true;
  self.newcityinput = true;
  self.welcomescreen = false;
  self.next = true;


    var country;
    var city;
    // get a random street view from the seeds
    self.getPanorama = function(){
      self.countryinput = "";
      self.cityinput = "";
      self.next = true;
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

      // check if the answer country is correct
     self.matchCountry = function(country) {
        console.log("USERS TEXT", self.countryinput);
        console.log("RANDOM COUNTRY", country);
        if (country === self.countryinput){
          console.log("Well done !");
          player1++;
          self.next = false;
          self.newcityinput = false;

        } else {
          console.log("Sorry, please try again");
        }

        $('.score1').text("Player  - "+ player1);

        };

      // check if the answer city is correct
    self.matchCity = function(city) { 
        if (city  === self.cityinput){
          console.log("Well done !");
          player1++;
          self.getPanorama();
        } else {
          console.log("Sorry, wrong city")
        }
        $('.score1').text("Player  - "+ player1);
        }; 

    }

    self.getPanorama(); 

    // console.log(country)


  //   // check if the answer country is correct
  //  self.matchCountry = function(country) {
  //     console.log("USERS TEXT", self.countryinput);
  //     console.log("RANDOM COUNTRY", country);
  //     if (country === self.countryinput){
  //       console.log("Well done !");
  //       player1++;
  //       self.next = false;
  //       self.newcityinput = false;

  //     } else {
  //       console.log("Sorry, please try again");
  //     }

  //     $('.score1').text("Player  - "+ player1);

  //     };

  //   // check if the answer city is correct
  // self.matchCity = function(city) { 
  //     if (city  === self.cityinput){
  //       console.log("Well done !");
  //       player1++;
  //       self.getPanorama();
  //     } else {
  //       console.log("Sorry, wrong city")
  //     }
  //     $('.score1').text("Player  - "+ player1);
  //     };



    // // take the input in the box of country and run the function that compares it with the seeds
    // $('#new-country-form').on("submit", function(event) {
    //   event.preventDefault();
    //   var text = $("#new-country-input").val();
    //   $("#new-country-input").val("");
    //   matchCountry(text, country); 
    // });

    // // take the input in the box of country and run the function that compares it with the seeds
    // $('#new-city-form').on("submit", function(event) {
    //   event.preventDefault();
    //   var text2 = $("#new-city-input").val();
    //   $("#new-city-input").val("");
    //   matchCity(text2, city);
    // });


  // start the big clock 
  self.startClock = function() {
    console.log("start clock");
    self.showscreen = false;
    self.newcountryinput = false;
    self.welcomescreen = true;


    timer = setInterval(function(){
      time -= 1;

      minutes = Math.floor(time / 60);
      seconds = time % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      
      if(time === 0) {
        console.log("Play Again");
        self.showscreen = true;
        self.welcomescreen = false;

        self.newcountryinput = false;
        self.getPanorama();
      }

      if (time > 0){
          $('.progress-bar').css('width', time+'%');
        } else {
          clearTimeout(timer);
        }

    }, 1000)
  }
    


  });

}





