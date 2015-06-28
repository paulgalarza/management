(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('UsersListController', function($scope, $location, Users, UserRoles) {
            $scope.itemsByPage = 10;
            $scope.displayedCollection = [];
            $scope.users = [];
            $scope.selected = '';
            $scope.user = {};

            UserRoles.query(function(userRoles) {
                $scope.userRoles = userRoles;
            });

            var init = function() {
                $scope.users = Users.query(function() {
                    $scope.displayedCollection = $scope.users.slice(0);
                });
            };
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.select = function(id) {
                $scope.selected = id;
            };

            $scope.newUser = function() {
                $('#userModal').openModal();
            };

            $scope.save = function() {
                $scope.error = 'has-error';
                if ($scope.userForm.$valid) {
                    $('#userForm').closeModal();
                    $scope.error = '';
                    Users.save($scope.user, function(user) {
                        $location.path('/usuarios/' + user.id);
                    });
                }
            };

            $scope.delete = function(user) {
                swal({
                    title: "¿Esta seguro?",
                    text: "El usuario no podrá ser recuperado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    user.$delete({
                        id: user.id
                    }, function() {
                        init();
                        swal("Eliminado!", "El usuario ha sido eliminado con exito.", "success");
                    });

                });
            };

        });
})();
