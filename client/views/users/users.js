angular.module('users', ['storedData'])
  .controller('UserController', function ($scope, CurrentData) {
    $scope.users = CurrentData.users;
  });
