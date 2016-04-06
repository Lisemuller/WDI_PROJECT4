angular
  .module('WorldieApp', ['ngResource', 'ui.router', 'angular-jwt','satellizer', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
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
  