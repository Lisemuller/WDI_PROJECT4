angular
  .module('WorldieApp')
  .factory('Score', Score);

Score.$inject = ['$resource', 'API'];
function Score($resource, API) {
  return $resource(API + '/scores/:id', {id: '@_id'}, {
  });
}