(function() {
	'use strict';
	angular
	.module('sidcasoft')
	.controller('CompanyController', function($scope, $routeParams, Companies){
		$scope.company = Companies.get({id: $routeParams.companyId},function(){
			console.log($scope.company);
		});
	});
})();