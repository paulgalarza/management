(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $timeout, $location, Projects, Customers, Processes, Activities, Users, UserRoles) {
            Projects.get({
                id: $routeParams.projectId
            }, function(project) {
                $scope.project = project;
                init();
                initProcess();
            });

            var init = function() {
                $scope.selectedTab = 1;
                $scope.usersByRole = [];
                $scope.customers = Customers.query();
                Users.query(function(users){
                    $scope.users = users;
                    $scope.usersInProject();
                });
                UserRoles.query(function(user_roles) {
                    $scope.user_roles = _.filter(user_roles, function(user_role) {
                        return user_role.id != 1;
                    });
                });
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

            $scope.usersInProject = function() {
                $scope.projectUsers = _.filter($scope.users, function(user) {
                    return user.project_id == $scope.project.id;
                });
            };

            $scope.filterByRole = function(role) {
                $scope.usersByRole = _.filter($scope.users, function(user) {
                    return user.userRoles_id == role;
                });
                $scope.currentUser = '';
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

            $scope.newMember = function() {
                $('#memberModal').openModal();
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

            $scope.saveMember = function() {
                $scope.memberError = 'has-error';
                var user = _.find($scope.users, function(user) {
                    return user.id == $scope.currentUser;
                });
                if ($scope.memberForm.$valid) {
                    user.project_id = $scope.project.id;
                    user.$update({
                        id: user.id
                    }, function(user) {
                        $scope.currentUser = '';
                        Users.query(function(users){
                            $scope.users = users;
                            $scope.usersInProject();
                        });
                    });
                    $('#memberModal').closeModal();
                    $scope.memberError = '';
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
