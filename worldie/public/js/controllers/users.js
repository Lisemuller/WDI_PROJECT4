angular
  .module('WorldieApp')
  .controller('UserController', UserController);

UserController.$inject = ['$auth', 'tokenService'];
function UserController($auth, tokenService) {

  var self = this;

  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();

  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        self.currentUser = tokenService.getUser();
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

}