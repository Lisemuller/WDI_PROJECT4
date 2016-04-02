angular
  .module('WorldieApp', ['ngResource', 'ui.router', 'angular-jwt','satellizer'])
  .constant('API', 'http://localhost:3000/api')
  .config(Router)
  .config(oauthConfig);

  Router.$inject = ['$stateProvider', '$urlRouterProvider'];
  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/index.ejs'
      })
      .state('play', {
        url: '/play',
        templateUrl: '/views/play.ejs'
      })
    $urlRouterProvider.otherwise('/');
  }

  oauthConfig.$inject = ['API', '$authProvider', 'FACEBOOK_API_KEY'];
  function oauthConfig(API, $authProvider, FACEBOOK_API_KEY) {
    $authProvider.facebook({
      url: API + '/auth/facebook',
      clientId: FACEBOOK_API_KEY
    });

    $authProvider.tokenPrefix = null;
  }