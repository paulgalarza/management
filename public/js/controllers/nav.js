(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('NavController', function($scope, $location, $route, Auth){
            
            $scope.isLoggedIn = typeof Auth.getUser() == 'object';
            $scope.user = {};
            $scope.menu = '';

            $scope.$on('loginBroadcast', function(event, isLoggedIn) {
                $scope.isLoggedIn = isLoggedIn;
                $scope.user = Auth.getUser();
            });

            $scope.$on('routeBroadcast',function(event, menu){
                $scope.menu = menu.str;
            });

            $scope.refresh = function(){
                $route.reload();
            };

            $scope.logout = function(){
                console.log('logout');
                swal(
                    {   
                        title: "¿Desea cerrar sesíon?",   
                        text: "",   
                        type: "warning",   
                        showCancelButton: true,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "Cerrar mi sesíon",
                        cancelButtonText: "No, cancelar",
                        closeOnConfirm: true 
                    }, 
                    function(){   
                        Auth.logout(function(){
                            $location.path('login');
                        });
                    }
                );
            };

            angular.element(document).ready(function () {
                $(".dropdown-button").dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: true,
                    hover: false,
                    gutter: 0,
                    belowOrigin: true
                });
                $(".button-collapse").sideNav();
            });
        });
})();