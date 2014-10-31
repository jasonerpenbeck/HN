angular.module('chart',['storedData'])
.controller('ChartController', function($scope, CurrentData) {
  $scope.data = {
    topics: [
      {name: 'meteor'},
      {name: 'angular'},
      {name: 'lodash'},
      {name: 'underscore'}
    ]
  };
  $scope.graphData = CurrentData.graphData;
})
