(function() {

  'use strict';
    
    angular
        .module('sidcasoft')
        .controller('HomeController', function($scope){
        	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
        		$scope.transitionState = "active"
        	});

        	angular.element(document).ready(function () {
        		$('.collapsible').collapsible({
      				accordion : false
			    });
        	});

        });
})();