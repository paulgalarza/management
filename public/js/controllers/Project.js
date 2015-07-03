(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $location, Projects, Customers, Processes, Requirements) {
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
                $scope.requirements = Requirements.query();
            };

            var initProcess = function() {
                Processes.query(function(processes) {
                    $scope.processes = processes;
                    _.each($scope.processes, function(process) {
                        process.requirement_id = process.requirement_id || '';
                        process.start = new Date(2013, 9, 22);
                        process.endProcess = new Date(2013, 9, 22);
                    });
                });
                $scope.newProcess = {
                    requirement_id: ''
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

            $scope.modalProcess = function() {
                $('#processModal').openModal();
            };

            $scope.saveProcess = function(process, processForm) {
                if (process.id) {
                    process.error = 'has-error';
                    if (processForm.$valid) {
                        process.$update(function(process) {
                            swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                        });
                    }
                } else {
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
                }


            };

            $scope.resetCollapse = function() {
                $('.collapsible').collapsible({
                    accordion: false
                });
            };

            $scope.open = function() {
                console.log('open');
            };

            $scope.removeProcess = function(process) {
                swal({
                    title: "¿Desea eliminar el proceso?",
                    text: "No podra recuperar el proceso eliminado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Aceptar",
                    cancelButtonText : 'Cancelar',
                    closeOnConfirm: false
                }, function() {
                    process.$delete({
                        id: process.id
                    }, function(process){
                        $scope.processes = _.filter($scope.processes, function(_process){
                            return process.id !== _process.id;
                        });
                        swal("Eliminado!", "El proceso a sido eliminado.", "success");    
                    })
                    
                });
            };

            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });


        });
})();
