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
                    project_id: 0
                };
                $scope.selected = null;
            }
            init();

            $scope.new = function() {
                $scope.requirement.folio = $scope.lastFolio();
                $('#requirementModal').openModal();
            };

            $scope.save = function() {
                Requirements.save($scope.requirement, function(requirement) {
                    init();
                });
            }

            $scope.lastFolio = function() {
                var last = 0;
                _.each($scope.requirements, function(requirement) {
                    last = parseInt(requirement.folio) > last ? parseInt(requirement.folio) : last;
                });
                return last + 1;
            }

            $scope.selectRequirement = function(requirementId) {
                _.each($scope.requirements, function(requirement) {
                    if (requirementId !== requirement.id) {
                        requirement.selected = false;
                    } else {
                        $scope.selected = requirement;
                    }
                });
            }

            $scope.approve = function() {
                $scope.selected.status = 2;
                $scope.selected.$update(function() {
                    init();
                });
            }

            $scope.cancel = function() {
                $scope.selected.status = 1;
                $scope.selected.$update(function() {
                    init();
                });
            }

            $scope.attach = function() {
                $('#attachModal').openModal();
            }

            $scope.delete = function() {
                $scope.selected.$delete();
                init();
            }

            $scope.print = function() {
                
            }
        });
})();
