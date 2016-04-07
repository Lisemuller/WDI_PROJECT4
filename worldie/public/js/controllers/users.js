angular
  .module('WorldieApp')
  .controller('UserController', UserController);

UserController.$inject = ['$auth', 'tokenService','User'];
function UserController($auth, tokenService, User) {


  this.all = User.query();


  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();

  this.authenticate = function(provider) {
    $auth.authenticate(provider).then(function() {
      self.currentUser = tokenService.getUser();
      console.log(self.currentUser)
    });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

}