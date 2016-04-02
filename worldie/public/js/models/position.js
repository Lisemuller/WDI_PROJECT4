angular
  .module('WorldieApp')
  .factory('Position', Position);

Position.$inject = ['$resource', 'API'];
function Position($resource, API) {
  return $resource(API + '/positions/:id', {id: '@_id'}, {
  });
}