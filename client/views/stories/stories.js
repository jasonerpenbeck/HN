angular.module('stories', ['storedData'])
  .controller('StoriesController', function ($scope, CurrentData) {
    console.log('inside StoriesController');
    $scope.stories = CurrentData.stories;
    console.log($scope.stories[0].title);
  });
