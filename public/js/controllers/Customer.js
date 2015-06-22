(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('CustomerController', function($scope, $routeParams, Customers, Companies) {
           Customers.get({
                id: $routeParams.companyId
            }, function(customer) {
                $scope.customer = customer;
            	init();
            });

           $scope.companies = Companies.query();

            var init = function(){
                $scope.customer._status = $scope.customer.status && true;
                $scope.changeStatus();
            }

            $scope.save = function() {
            	$scope.customer.status = $scope.customer._status ? 1 : 0;
                $scope.customer.$update(function(customer) {
                    Customers.get({
                        id: customer.id
                    }, function(customer) {
                    	$scope.customer = customer;
                        init();
                    	swal("Guardado exitoso!", "Los cambios han sido guardados correctamente!", "success");
                    });
                });
            };

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            };

            $scope.changeStatus = function(){
                $scope.customer.strStatus = $scope.getStatus($scope.customer._status);
            };

        });
})();
