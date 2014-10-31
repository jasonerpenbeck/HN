angular.module('hackernews', [
  'cloud',
  'cloudWords',
  'dashboard',
  'stories',
  'users',
  'chart',
  'ui.router',
  'ngRoute'
])
  .config(function($httpProvider, $urlRouterProvider, $stateProvider, $routeProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'views/dashboard/dashboard.html'
      })
  });













    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/dashboard/dashboard.html',
    //     controller: 'DashboardController'
    //   })
