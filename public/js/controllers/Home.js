(function() {

    'use strict';

    angular
        .module('sidcasoft')
        .controller('HomeController', function($scope, $timeout, Projects) {
            $scope.$on("$routeChangeSuccess", function(scope, next, current) {
                $scope.transitionState = "active"
            });

            $scope.resetCollapse = function() {
                angular.element(document).ready(function() {
                    $('.collapsible').collapsible({
                        accordion: false
                    });
                });
            };

            Projects.query({}, function(projects) {
                $scope.projects = projects;
                $timeout(function() {
                    $scope.resetCollapse();
                }, 300);
            });

        });
})();
