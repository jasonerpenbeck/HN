var app = angular.module('myApp', [
  "ui.router",
  "myApp.main",
  "myApp.top100visual",
  "myApp.search",
  "firebase",
  "d3",
  "myApp.directives",
  "myApp.trackUser",
  "myApp.trackPost",
  "myApp.home"
  ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main/main.html',
      controller: 'mainController'
    })
    .state('main.subviews', {
      views: {
        'search': {
          templateUrl: 'views/search/search.html',
          controller: 'searchCtrl'
        },
        'top100visual': {
          templateUrl: 'views/top100visual/top100visual.html',
          controller: 'top100visualController'
        },
        'trackUser': {
          templateUrl: 'views/trackUser/trackUser.html',
          controller: 'trackUserController'
        },
        'home': {
          templateUrl: 'views/home/home.html',
          controller: 'homeController'
        },
        'trackPost': {
          templateUrl: 'views/trackPost/trackPost.html',
          controller: 'trackPostController'
        }
      }
    });
  $urlRouterProvider.otherwise("/main");
});
