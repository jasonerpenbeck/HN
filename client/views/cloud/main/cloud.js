angular.module('cloud', [])
.controller('CloudController', function ($scope) {
  $scope.data = {
    topics: [
      {name: 'meteor'},
      {name: 'angular'},
      {name: 'lodash'},
      {name: 'underscore'}
    ]
  };
});