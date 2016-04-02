angular
  .module('WorldieApp', ['ngResource', 'ui.router', 'angular-jwt','satellizer'])
  .constant('API', 'http://localhost:3000/api')
  .config(oauthConfig);


  oauthConfig.$inject = ['API', '$authProvider', 'FACEBOOK_API_KEY'];
  function oauthConfig(API, $authProvider, FACEBOOK_API_KEY) {
    $authProvider.facebook({
      url: API + '/auth/facebook',
      clientId: FACEBOOK_API_KEY
    });

    $authProvider.tokenPrefix = null;
  }

  function initMap() {
      var panorama;
      panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
        position: {lat: 37.869260, lng: -122.254811},
        pov: {heading: 165, pitch: 0},
        zoom: 1,
        addressControl: false,
        linksControl: false,
      });

  }