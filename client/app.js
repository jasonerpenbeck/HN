angular.module('hackernews', [
  'cloud',
  'cloudWords',
  'dashboard',
  'famous.angular',
  'ui.router'
])
.config(function($httpProvider, $urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/cloud/cloudMain/CloudMain.html',
    })
});