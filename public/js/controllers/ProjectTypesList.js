(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectTypesListController', function($scope, $location, ProjectTypes) {

            ProjectTypes.query(function(projectTypes){
                $scope.projectTypes = projectTypes;
            });

            $scope.newRequirement = function(){
                $('#projectTypeModal').openModal();
            };

            $scope.save = function() {
                ProjectTypes.save($scope.projectType, function(projectType) {
                    $location.path('/tipoproyecto/'+projectType.id);
                });
            }

            $scope.new = function(){
                $('.modal').openModal();
            }
        });
})();
