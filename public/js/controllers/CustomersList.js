(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('CustomersListController', function($scope, $location, Customers, Companies) {
            $scope.itemsByPage = 10;
            $scope.displayedCollection = [];
            $scope.customers = [];
            $scope.selected = '';
            $scope.customer = {};

            var init = function() {
                $scope.customers = Customers.query(function() {
                    $scope.displayedCollection = $scope.customers.slice(0);
                });

                $scope.companies = Companies.query(function(companies) {});
            };
            
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            }

            $scope.select = function(id) {
                $scope.selected = id;
            }

            $scope.newCustomer = function() {
                $('#customerModal').openModal();
            }

            $scope.save = function() {
                Customers.save($scope.customer, function(customer) {
                    $location.path('/clientes/' + customer.id);
                });
            };

            $scope.delete = function(customer) {
                swal({
                    title: "¿Esta seguro?",
                    text: "El cliente no podrá ser recuperado!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    customer.$delete({
                        id: customer.id
                    }, function() {
                        init();
                        swal("Eliminado!", "El cliente ha sido eliminado con exito.", "success");
                    });

                });
            };
        });
})();
