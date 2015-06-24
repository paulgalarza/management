(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('RequirementsListController', function($scope, $routeParams, Projects, Companies, Requirements) {

            Projects.query(function(projects) {
                $scope.projects = projects;
            });

            Companies.query(function(companies) {
                $scope.companies = companies;
            });

            Requirements.query(function(requirements){
                $scope.requirements = requirements;
            });

            $scope.newRequirement = function(){
                $('#requirementModal').openModal();
            };
        });
})();
