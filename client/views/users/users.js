angular.module('users', [])
.controller('UserController', function ($scope) {
  $scope.data = {
    users: [
      {name: 'rick'},
      {name: 'jamon'},
      {name: 'kia'},
      {name: 'jason'}
    ]
  };
});