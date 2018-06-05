var app = angular.module('app', ['ui.router', 'ngMaterial','jkAngularRatingStars']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'template/login.html',
      controller: 'loginCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'template/home.html',
      controller: 'homeCtrl'
    })
    .state('home.dashBoard', {
      url: '/dashBoard',
      templateUrl: 'template/dashBoard.html',
      controller: 'dashboardController'
    });
  $urlRouterProvider.otherwise('/login');
}]);
