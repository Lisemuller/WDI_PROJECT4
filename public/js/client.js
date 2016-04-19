angular
  .module('WorldieApp', ['ngResource', 'ui.router', 'angular-jwt','satellizer'])
  .constant('API', 'http://localhost:3000/api')
  .config(oauthConfig);

angular.element(document).ready(function () {
  $(".panorama").panorama_viewer({
      repeat: false,
      direction: "horizontal", 
      animationTime: 700,  
      easing: "ease-out",        
      overlay: true             
    });
});

oauthConfig.$inject = ['API', '$authProvider', 'FACEBOOK_API_KEY'];
function oauthConfig(API, $authProvider, FACEBOOK_API_KEY) {
  $authProvider.facebook({
    url: API + '/auth/facebook',
    clientId: FACEBOOK_API_KEY
  });

  $authProvider.tokenPrefix = null;
}
  