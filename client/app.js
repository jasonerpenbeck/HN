angular.module('hackernews', [
  'cloud',
  'famous.angular',
  'ui.router'
])
.config(function($httpProvider, $urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main/main.html',
    })
});