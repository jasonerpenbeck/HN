angular.module('chart', [])
.controller('ChartController', function ($scope) {
  $scope.data = {
    topics: [
      {name: 'meteor'},
      {name: 'angular'},
      {name: 'lodash'},
      {name: 'underscore'}
    ]
  };
});