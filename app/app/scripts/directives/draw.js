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
            link: function postLink(scope, element, attrs) {
                var path;
                function initPaper() {
                    paper.install(window);
                    paper.setup('canvas');
                    path = new paper.Path();
                    path.strokeColor = 'black';
                    var start = new Point(100, 100);
                    path.moveTo(start);
                    path.lineTo(start + [ 100, -50 ]);
                }

                initPaper();
            }
        };
    });