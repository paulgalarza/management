(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $location, Projects, Customers, Processes) {
            Projects.get({
                id: $routeParams.projectId
            }, function(project) {
                $scope.project = project;
                init();
            });

            var init = function() {
                $scope.selectedTab = 1;
                $scope.customers = Customers.query();
                $scope.project._status = $scope.project.status && true;
                $scope.process = {
                    requirement_id: 0
                };

            }

            $scope.save = function() {
                $scope.project.status = $scope.project._status ? 1 : 0;
                $scope.project.$update(function(project) {
                    init();
                    swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                });
            };

            $scope.selectTab = function(tab){
                $scope.selectedTab = tab;
            }

            $scope.new = function(){
                switch(tab){
                    case 2:
                        $('#processModal').openModal();
                        break;
                }
            };

            $scope.newProcess = function(){
                $('#processModal').openModal();
            };

            $scope.saveProcess = function(process){
                $scope.error = 'has-error';
                if($scope.processForm.$valid){
                    $('#processModal').closeModal();    
                    $scope.error = '';
                    Processes.$save(process, function(process){
                        //initProcess();
                    });
                }
            };

            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });
        });
})();
