angular.module('users', ['storedData'])
  .controller('UserController', function ($scope, CurrentData) {
    $scope.data = CurrentData.users;
  });
