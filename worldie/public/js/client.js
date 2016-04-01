angular
  .module('WorldieApp', ['ngResource', 'ui.router', 'angular-jwt'])
  .constant('API', 'http://localhost:3000/api')
  .config(Router)

  Router.$inject = ['$stateProvider', '$urlRouterProvider'];
  function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/index.ejs'
      })


    $urlRouterProvider.otherwise('/');
  }