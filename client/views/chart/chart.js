angular.module('chart',['storedData'])
  .controller('ChartController', function($scope, CurrentData){
    $scope.data = CurrentData.graphData;
  })
