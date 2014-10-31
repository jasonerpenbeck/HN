angular.module('dashboard', [])
  .controller('DashboardController', function ($scope, CurrentData) {
    $scope.currentTopic = CurrentData.currentTopic;
  });