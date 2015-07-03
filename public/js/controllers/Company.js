(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('CompanyController', function($scope, $routeParams, Companies) {
           Companies.get({
                id: $routeParams.companyId
            }, function(company) {
                $scope.company = company;
            	init();
            });

            var init = function(){
                $scope.company._status = $scope.company.status && true;
                $scope.changeStatus();
            }

            $scope.save = function() {
            	$scope.company.status = $scope.company._status ? 1 : 0;
                $scope.company.$update(function(company) {
                    Companies.get({
                        id: company.id
                    }, function(company) {
                    	$scope.company = company;
                        init();
                    	swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                    });
                });
            };

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.changeStatus = function(){
                $scope.company.strStatus = $scope.getStatus($scope.company._status);
            };

        });
})();
