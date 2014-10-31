angular.module('stories', ['storedData'])
  .controller('StoriesController', function ($scope, CurrentData) {
    $scope.data = CurrentData.stories;
  });
