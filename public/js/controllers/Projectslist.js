(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectsListController', function($scope, Auth){
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

            $scope.goProjectEdit = function(project) {
                $location.path('/projects/' + project.id);
            };
        });
})();