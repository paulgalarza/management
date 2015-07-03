(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('RequirementController', function($scope, $routeParams, Projects, Companies) {

            Projects.query(function(projects){
                $scope.projects = projects;
            });

            Companies.query(function(companies){
                $scope.companies = companies;
            });

            angular.element(document).ready(function() {
                $('select').material_select();
            });
        });
})();
