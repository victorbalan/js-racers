'use strict';
/**
 * @ngdoc directive
 * @name jsRacers
 * @description
 * # jsRacers
 *
 * Main module of the application.
 */

angular.module('jsRacers')
    .directive('draw', function () {
        return {
            restrict: 'A',
            link: function postLink($scope, element, attrs) {

                $scope.clickThis = function() {                   
                    var path = new Path.Circle({
                        center: view.center,
                        radius: 30,
                        strokeColor: 'black'
                    });
                }

                $scope.initPaper = function() {
                    paper.install(window);
                    paper.setup('game');
                    paper.view.on('resize', $scope.resize);
                    $scope.resize();
                }

                $scope.resize = function() {
                    view.viewSize = new Size($(element).parent().width(), 500);    
                }

                $(window).resize($scope.onResize);
                element.on('mousedown', $scope.clickThis);

                $scope.initPaper();
            }
        };
    });