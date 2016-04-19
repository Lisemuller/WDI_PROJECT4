angular
  .module('WorldieApp')
  .controller('PositionsController', PositionsController)

PositionsController.$inject = ['$window','$scope','Position', 'Score', 'tokenService'];
function PositionsController($window, $scope, Position, Score, tokenService){

  var self = this;
  var time = 100;
  var timer;
  var player1 = 0;

  self.playerScore = 0;

  self.scores = Score.query();

  function getLatLng(position) {
    return new google.maps.LatLng(position.lat, position.lng);
  }

  self.all = [];

  Position.query(function(positions) {
    console.log(self.scores);
    self.all = positions;

    self.showscreen = true;
    self.newcountryinput = true;
    self.newcityinput = true;
    self.welcomescreen = false;
    self.instruction = false;
    self.nextbutton = true;
    self.errormessage = true;
    self.errormessagecity = true;
    self.currentPlace = getRandomPlace();

    function getRandomPlace() {
      return self.all[Math.floor(Math.random() * self.all.length)];
    };

    // get a random street view from the seeds
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
      position: getLatLng(self.currentPlace),
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      addressControl: false,
      linksControl: false,
    });

  self.Play = function() {
    time = 100;
    self.countryinput = "";
    self.cityinput = "";
    self.newcityinput = true;
    self.nextbutton = true;

    // check if the answer country is correct
    self.matchCountry = function() {
      country = self.currentPlace.country;

      console.log("USERS TEXT", self.countryinput);
      console.log("RANDOM COUNTRY", country);
      if (country === self.countryinput){
        console.log("Well done !");
        self.playerScore ++;
        self.nextbutton = false;
        self.newcityinput = false;
        self.errormessage = true;
      } else {
        console.log("Sorry, please try again");
        self.errormessage = false;
        self.countryinput = "";
        self.newcityinput = true;
      }

    };

    // check if the answer city is correct
    self.matchCity = function() { 

      city = self.currentPlace.city;
      console.log("this",city); 

      if (!!self.cityinput.match(city)){
        console.log("Well done !");
        self.playerScore ++;
        self.currentPlace = getRandomPlace();
        panorama.setPosition(getLatLng(self.currentPlace));
        self.cityinput="";
        self.countryinput="";
        self.newcityinput = true;
        self.errormessagecity = true;
      } else {
        console.log("Sorry, wrong city")
        self.errormessagecity = false;
        self.cityinput = "";

      }
    }; 

  }

  self.next = function() {
    self.countryinput="";
    self.cityinput="";
    self.currentPlace = getRandomPlace();
    panorama.setPosition(getLatLng(self.currentPlace));
  }

    self.Play(); 


    // start the big clock 
    self.startClock = function() {
      console.log("start clock");
      self.showscreen = false;
      self.newcountryinput = false;
      self.welcomescreen = true;
      self.instruction = true;
      self.currentPlace = getRandomPlace();
      panorama.setPosition(getLatLng(self.currentPlace));


      timer = setInterval(function(){
        time -= 1;

        minutes = Math.floor(time / 60);
        seconds = time % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if(time === 0) {
          console.log("Play Again");
          time = 100;
          self.errormessage = true;
          self.errormessagecity = true;
          self.showscreen = true;
          self.welcomescreen = false;
          self.newcountryinput = true;
          self.currentPlace = getRandomPlace();
          panorama.setPosition(getLatLng(self.currentPlace));
          self.Play();
          Score.save({ score: self.playerScore, user: tokenService.getUser()._id }, function(savedScore){
            $scope.$applyAsync(function() {
              self.scores = Score.query();
            });
          });
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





