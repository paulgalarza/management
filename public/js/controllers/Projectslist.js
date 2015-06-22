(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectsListController', function($scope, $location, Projects) {
            $scope.itemsByPage = 10;
            $scope.displayedCollection = [];
            $scope.projects = [];
            $scope.selected = '';

            var init = function() {
                $scope.projects = Projects.query(function() {
                    $scope.displayedCollection = $scope.projects.slice(0);
                });
            }
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.select = function(id) {
                $scope.selected = id;
            };

            $scope.newProject = function() {
                $('#projectModal').openModal();
            }

            $scope.save = function() {
                Projects.save($scope.project, function(project) {
                    $location.path('/proyectos/' + project.id);
                });
            }
        });
})();
