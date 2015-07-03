(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('RequirementsListController', function($scope, Projects, Requirements, _) {

            var init = function() {
                $scope.projects = Projects.query();
                Requirements.query(function(requirements) {
                    _.each(requirements, function(requirement) {
                        requirement._status = requirement.status == 1 ? 'Prospecto' : 'Aprobado';
                    });
                    $scope.requirements = requirements;
                });
                $scope.requirement = {
                    folio: null,
                    project_id: ''
                };
                $scope.selected = null;
            }
            init();

            $scope.new = function() {
                $scope.requirement.folio = $scope.lastFolio();
                $('#requirementModal').openModal();
            };

            $scope.save = function() {
                $scope.error = 'has-error';
                if ($scope.requirementForm.$valid) {
                    $('#requirementModal').closeModal();
                    $scope.error = '';
                    Requirements.save($scope.requirement, function(requirement) {
                        init();
                    });
                }
            };

            $scope.lastFolio = function() {
                var last = 0;
                _.each($scope.requirements, function(requirement) {
                    last = parseInt(requirement.folio) > last ? parseInt(requirement.folio) : last;
                });
                return last + 1;
            };

            $scope.selectRequirement = function(requirementId) {
                _.each($scope.requirements, function(requirement) {
                    if (requirementId !== requirement.id) {
                        requirement.selected = false;
                    } else {
                        $scope.selected = requirement;
                    }
                });
            };

            $scope.approve = function() {
                $scope.selected.status = 2;
                $scope.selected.$update(function() {
                    init();
                });
            };

            $scope.cancel = function() {
                $scope.selected.status = 1;
                $scope.selected.$update(function() {
                    init();
                });
            };

            $scope.attach = function() {
                $('#attachModal').openModal();
            };

            $scope.delete = function() {
                swal({
                    title: "¿Esta seguo?",
                    text: "El requerimiento no podra ser recuperado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    $scope.selected.$delete({
                        id: $scope.selected.id
                    }, function() {
                        init();
                        swal("Eliminado!", "El requerimiento a sido eliminado con exito.", "success");
                    });

                });
            };

            $scope.print = function() {
                console.log('print');
            }
        });
})();
