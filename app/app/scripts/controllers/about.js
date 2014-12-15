'use strict';

/**
 * @ngdoc function
 * @name jsRacers.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsRacers
 */
angular.module('jsRacers')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
