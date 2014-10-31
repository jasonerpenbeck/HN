angular.module('hackernews', [
  'cloud',
  'dashboard',
  'stories',
  'users',
  'chart',
  'ui.router'
])
  .config(function($httpProvider, $urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '',
        templateUrl: 'views/dashboard/dashboard.html'
      })
  });
