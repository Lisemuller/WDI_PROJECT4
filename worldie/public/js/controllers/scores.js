angular
  .module('WorldieApp')
  .controller('ScoresController', ScoresController)

ScoresController.$inject = ['$window','$scope','Score'];
function ScoresController($window, $scope, Score){

  this.all = Score.query();

  this.newScore= {};

  this.addScore = function(){
    this.newScore = Score.save(this.newScore);
    console.log(this.newScore)
  }

}