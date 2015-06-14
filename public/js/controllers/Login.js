(function() {

  'use strict';
    
    angular
        .module('sidcasoft')
        .controller('LoginController', function($scope, $location, Auth){
        	
        	$scope.login = function(){
        		Auth.login($scope.user,function(isSuccess){
        			if(isSuccess){
        				$location.path('home');
        			}
        			else{
        				console.log('user or password are not correct!!');	
        			}
        		});
        	}

        });
})();