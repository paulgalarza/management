(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectTypeController', function($scope, $routeParams, ProjectTypes) {
            ProjectTypes.get({
                id: $routeParams.projectTypeId
            }, function(projectType) {
                $scope.projectType = projectType;
                init();
            });

            var init = function() {
                $scope.projectType._status = $scope.projectType.status && true;
                $scope.changeStatus();
            }

            $scope.save = function() {
                $scope.projectType.status = $scope.projectType._status ? 1 : 0;
                $scope.projectType.$update(function(projectType) {
                    init();
                    swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");

                });
            };

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.changeStatus = function() {
                $scope.projectType.strStatus = $scope.getStatus($scope.projectType._status);
            };


            angular.element(document).ready(function() {
                $('select').material_select();
            });

        });
})();
