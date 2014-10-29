angular.module('hackernews', [
  'cloud',
  'cloudWords',
  'dashboard',
  'famous.angular',
  'ui.router'
])
.config(function($httpProvider, $urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: 'views/dashboard/dashboard.html',
    })
});