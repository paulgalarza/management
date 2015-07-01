(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectTypesListController', function($scope, $location, ProjectTypes) {

            var init = function() {
                ProjectTypes.query(function(projectTypes) {
                    $scope.projectTypes = projectTypes;
                });
            };
            init();


            $scope.newRequirement = function() {
                $('#projectTypeModal').openModal();
            };

            $scope.save = function() {
                $scope.error = 'has-error';
                if ($scope.projectTypeForm.$valid) {
                    $('#projectTypeModal').closeModal();
                    $scope.error = '';
                    ProjectTypes.save($scope.projectType, function(projectType) {
                        $location.path('/tipoproyecto/' + projectType.id);
                    });
                }

            };

            $scope.new = function() {
                $('.modal').openModal();
            };

            $scope.delete = function(projectType) {
                swal({
                    title: "¿Esta seguro?",
                    text: "El tipo no podrá ser recuperado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    projectType.$delete({
                        id: projectType.id
                    }, function() {
                        init();
                        swal("Eliminado!", "El tipo ha sido eliminado con exito.", "success");
                    });

                });
            };

        });
})();
