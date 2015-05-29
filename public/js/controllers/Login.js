(function() {

  'use strict';
    
    angular
        .module('sidcasoft')
        .controller('LoginController', function($scope, $location, Auth){
        	$scope.login = function(){
        		if($scope.user.user == "admin" && $scope.user.password=="admin"){
		            Auth.setUser($scope.user);
		            $location.path( "/home" );
		        }
		        else{
		            $scope.message="usuario o contraseña no validos";
		            $scope.messagecolor="alert alert-danger";
		        }
        	}

        	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
		        $scope.transitionState = "active"
		    });
        });
})();