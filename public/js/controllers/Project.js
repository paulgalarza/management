(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('ProjectController', function($scope, $routeParams, $timeout, $location, Projects, Customers, Processes, Activities, Requirements, Users, UserRoles) {
            Projects.get({
                id: $routeParams.projectId
            }, function(project) {
                console.log(project);
                $scope.project = project;
                var customerId = 
                init();
                initProcess();
            });

            var init = function() {
                $scope.selectedTab = 1;
                $scope.usersByRole = [];
                $scope.customers = Customers.query();
                Users.query(function(users) {
                    $scope.users = users;
                    $scope.usersInProject();
                });
                UserRoles.query(function(user_roles) {
                    $scope.user_roles = _.filter(user_roles, function(user_role) {
                        return user_role.id != 1;
                    });
                });
                $scope.project._status = $scope.project.status && true;
                $scope.requirements = Requirements.query();
            };

            var initProcess = function() {
                Processes.query(function(processes) {
                    $scope.processes = processes;
                    _.each($scope.processes, function(process) {
                        process.requirement_id = process.requirement_id || '';
                        process.start = new Date(process.start);
                        process.endProcess = new Date(process.endProcess);
                        process.error = '';
                    });
                    $scope.selectProcess(processes[0]);
                });
                $scope.newProcess = {
                    requirement_id: ''
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

            $scope.newActivity = function() {
                $('#activityModal').openModal();
            };


            $scope.newMember = function() {
                $('#memberModal').openModal();
            };

            $scope.saveActivity = function(activity, activityForm) {
                if (activity.id) {
                    activity.error = 'has-error';
                    var _activity = activity;
                    if (activityForm.$valid) {
                        activity = Activities.get({
                            id: activity.id
                        }, function(activity) {
                            activity.name = _activity.name;
                            activity.description = _activity.duration;
                            activity.duration = _activity.duration;
                            activity.progress = _activity.progress;
                            activity.$update(function(activity) {
                                swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                            });
                        });
                    }
                } else {
                    $scope.activityError = 'has-error';
                    if ($scope.activityForm.$valid) {
                        $('#activityModal').closeModal();
                        $scope.activityError = '';
                        Activities.save(activity, function(activity) {
                            $scope.currentProcess.activities.push(activity);
                            initActivity();
                            $scope.resetCollapse();
                        });
                    }

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
                        Users.query(function(users) {
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
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: false
                }, function() {
                    process.$delete({
                        id: process.id
                    }, function(process) {
                        $scope.processes = _.filter($scope.processes, function(_process) {
                            return process.id !== _process.id;
                        });
                        swal("Eliminado!", "El proceso a sido eliminado.", "success");
                    })

                });
            };

            $scope.removeActivity = function(activity) {
                swal({
                    title: "¿Desea eliminar la actividad?",
                    text: "No podra recuperar la actividad eliminado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: 'Cancelar',
                    closeOnConfirm: false
                }, function() {
                    Activities.get({
                        id: activity.id
                    }, function(activity) {
                        activity.$delete({
                            id: activity.id
                        }, function(activity) {
                            $scope.currentProcess.activities = _.filter($scope.currentProcess.activities, function(_activity) {
                                return activity.id != _activity.id;
                            });
                            swal("Eliminado!", "El proceso a sido eliminado.", "success");
                        });
                    });


                });
            }

            angular.element(document).ready(function() {
                $('ul.tabs').tabs();
            });


        });
})();
