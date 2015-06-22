(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('CompaniesController', function($scope, $routeParams, Companies) {
            $scope.company = Companies.get({
                id: $routeParams.companyId
            }, function() {
            	$scope.company._status = $scope.company.status && true;
            });

            $scope.save = function() {
            	$scope.company.status = $scope.company._status ? 1 : 0;
                $scope.company.$update(function(company) {
                    Companies.get({
                        id: company.id
                    }, function(company) {
                    	$scope.company = company;
                    	swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                    });
                });
            };

        });
})();
