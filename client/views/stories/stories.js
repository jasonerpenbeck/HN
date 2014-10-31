angular.module('articles', [])
.controller('ArticleController', function ($scope) {
  $scope.data = {
    articles: [
      {title: 'meteor'},
      {title: 'angular'},
      {title: 'lodash'},
      {title: 'underscore'}
    ]
  };
});