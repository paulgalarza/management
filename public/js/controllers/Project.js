(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $location, Projects, Customers) {
            Projects.get({
                id: $routeParams.projectId
            }, function(project) {
                $scope.project = project;
                init();
            });

            var init = function() {
                $scope.customers = Customers.query();
                $scope.project._status = $scope.project.status && true;
            }

            $scope.save = function() {
                $scope.project.status = $scope.project._status ? 1 : 0;
                $scope.project.$update(function(project) {
                    init();
                    swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                });
            };

            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });
        });
})();
