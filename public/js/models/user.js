angular
  .module('WorldieApp')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  return $resource(API + '/users/:id', {id: '@_id'}, {
  });
}