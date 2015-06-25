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
                Users.save($scope.user, function(user) {
                    $location.path('/usuarios/' + user.id);
                });
            };
        });
})();
