(function() {

  'use strict';
    
    angular
        .module('sidcasoft')
        .controller('HomeController', function($scope){
        	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
        		$scope.transitionState = "active"
        	});

        	angular.element(document).ready(function () {
        		console.log('ready');
        		$('.collapsible').collapsible({
      				accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
			    });
        	});

        });
})();