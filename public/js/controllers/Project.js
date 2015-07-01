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
                initProcess();
            });

            var init = function() {
                $scope.selectedTab = 1;
                $scope.customers = Customers.query();
                $scope.project._status = $scope.project.status && true;
            };

            var initProcess = function() {
                Processes.query(function(processes) {
                    $scope.processes = processes;
                    _.each($scope.processes, function(process){
                        process.requirement_id = process.requirement_id || '';
                        process.error = '';
                    });                 
                });
                $scope.process = {
                    requirement_id: 0
                };
            };

            $scope.save = function() {
                $scope.project.status = $scope.project._status ? 1 : 0;
                $scope.project.$update(function(project) {
                    init();
                    swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                });
            };

            $scope.selectTab = function(tab) {
                $scope.selectedTab = tab;     
                $scope.resetCollapse();           
            }

            $scope.newProcess = function() {
                $('#processModal').openModal();
            };

            $scope.saveProcess = function(process) {
                $scope.processError = 'has-error';
                if ($scope.processForm.$valid) {
                    $('#processModal').closeModal();
                    $scope.processError = '';
                    process.project_id = $scope.project.id;
                    Processes.save(process, function(process) {
                        initProcess();
                        $scope.resetCollapse();
                    });
                }
            };

            $scope.resetCollapse = function() {
                $('.collapsible').collapsible({
                    accordion: false
                });
            }

            $scope.open = function(){
                console.log('open');
            }
            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });


        });
})();
