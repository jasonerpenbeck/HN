angular.module('hackernews', [
  'cloud',
  'cloudWords',
  'dashboard',
  'articles',
  'users',
  'ui.router'
])
.config(function($httpProvider, $urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '',
      templateUrl: 'views/dashboard/dashboard.html',
    })
});