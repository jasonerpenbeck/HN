angular.module('chart',['storedData'])
.controller('ChartController', function($scope, CurrentData) {
  $scope.graphData = CurrentData.graphData;
});