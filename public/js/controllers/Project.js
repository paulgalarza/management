(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $timeout, $location, Projects, Customers, Processes, Activities) {
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
                    _.each($scope.processes, function(process) {
                        process.requirement_id = process.requirement_id || '';
                        process.error = '';

                    });
                    $scope.selectProcess(processes[0]);
                });
                $scope.process = {
                    requirement_id: 0
                };
            };

            var initActivity = function() {
                Activities.query(function(activities) {
                    $scope.activities = activities;
                    _.each($scope.activities, function(activity) {
                        activity.process_id = activity.process_id || '';
                        activity.error = '';
                    });
                });
                $scope._activity = {
                    process_id: ''
                };
            };

            $scope.selectProcess = function(process) {
                $scope.currentProcess = process;
                $timeout(function() {
                    $scope.resetCollapse();
                }, 300);
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
            };

            $scope.newProcess = function() {
                $('#processModal').openModal();
            };

            $scope.newActivity = function() {
                $('#activityModal').openModal();
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

            $scope.saveActivity = function(activity) {
                $scope.activityError = 'has-error';
                if ($scope.activityForm.$valid) {
                    $('#activityModal').closeModal();
                    $scope.activityError = '';
                    Activities.save(activity, function(activity) {
                        initActivity();
                        $scope.resetCollapse();
                    });
                }
            };

            $scope.resetCollapse = function() {
                $('.collapsible').collapsible({
                    accordion: false
                });
            }

            $scope.open = function() {
                console.log('open');
            };

            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });


        });
})();
