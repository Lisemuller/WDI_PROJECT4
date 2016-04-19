angular.module('WorldieApp')
  .directive('googleplace', GooglePlace);

function GooglePlace() {
  console.log("LOADED");
  return {
    require: 'ngModel',
    scope: {
      placeChanged: '&',
      types: '='
    },
    link: function($scope, $elem, attrs, model) {
      var autocomplete = new google.maps.places.Autocomplete($elem[0], { types: $scope.types });

      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        $scope.$apply(function() {
          model.$setViewValue($elem.val());
          $scope.placeChanged();
        });
      });
    }
  }
}