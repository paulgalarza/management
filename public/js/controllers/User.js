(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('UserController', function($scope, $routeParams, Users, UserRoles) {

            Users.get({
                id: $routeParams.userId
            }, function(user) {
                $scope.user = user;
                init();
            });

            UserRoles.query(function(userRoles) {
                $scope.userRoles = userRoles;
            });

            var init = function() {
                $scope.user._status = $scope.user.status && true;
                $scope.changeStatus();
                $scope.user.company_id = 0;
            }

            $scope.save = function() {
                $scope.user.status = $scope.user._status ? 1 : 0;
                $scope.user.$update(function(user) {
                    init();
                    swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");

                });
            };

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.changeStatus = function() {
                $scope.user.strStatus = $scope.getStatus($scope.user._status);
            };


            angular.element(document).ready(function() {
                $('select').material_select();
            });

        });
})();
