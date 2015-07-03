(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectsListController', function($scope, $location, Projects, ProjectTypes, Customers) {
            $scope.projects = [];
            var init = function() {
                $scope.projects = Projects.query();
                $scope.customers = Customers.query();
                $scope.projectTypes = ProjectTypes.query();
            };
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.newProject = function() {
                $('#projectModal').openModal();
            };

            $scope.save = function() {
                $scope.error = 'has-error';
                if ($scope.projectForm.$valid) {
                    $('#projectModal').closeModal();
                    $scope.error = '';
                    Projects.save($scope.project, function(project) {
                        $location.path('/proyecto/' + project.id);
                    });
                }
            };

            $scope.delete = function(project) {
                swal({
                    title: "¿Esta seguro?",
                    text: "El proyecto no podrá ser recuperado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    project.$delete({
                        id: project.id
                    }, function() {
                        init();
                        swal("Eliminado!", "El proyecto ha sido eliminado con exito.", "success");
                    });

                });
            };

        });
})();
