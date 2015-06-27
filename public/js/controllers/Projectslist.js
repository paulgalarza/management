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
            }
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.newProject = function() {
                $('#projectModal').openModal();
            }

            $scope.save = function() {                                
                Projects.save($scope.project, function(project) {
                    $location.path('/proyecto/' + project.id);
                });
            }
        });
})();
