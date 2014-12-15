'use strict';

/**
 * @ngdoc overview
 * @name jsRacers
 * @description
 * # jsRacers
 *
 * Main module of the application.
 */
angular
  .module('jsRacers', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
