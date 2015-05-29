(function() {

  'use strict';
    
    angular
        .module('sidcasoft')
        .controller('NavController', function($scope, $location, Auth){
            $scope.isLogged = Auth.isLoggedIn();

            $scope.logout = function(){
                swal({   
                    title: "¿Desea cerrar sesíon?",   
                    text: "!",   
                    type: "warning",   
                    showCancelButton: true,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "Yes, delete it!",   
                    closeOnConfirm: true }, 
                    function(){   
                        Auth.setUser(undefined);
                        $location.path( "/login" );
                    });
            }


            angular.element(document).ready(function () {
                console.log('ready');
                 $(".button-collapse").sideNav();
                 $(".button-collapse").sideNav();
            });
        });
})();