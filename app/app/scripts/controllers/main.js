'use strict';

/**
 * @ngdoc function
 * @name jsRacers.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsRacers
 */
angular.module('jsRacers')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
