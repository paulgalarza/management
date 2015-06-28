(function() {
    'use strict';
    angular
        .module('sidcasoft')
        .controller('CompaniesListController', function($scope, $location, Companies) {
            $scope.itemsByPage = 10;
            $scope.displayedCollection = [];
            $scope.companies = [];
            $scope.selected = '';
            $scope.company = {};

            var init = function() {
                $scope.companies = Companies.query(function() {
                    $scope.displayedCollection = $scope.companies.slice(0);
                });
            }
            init();

            $scope.getStatus = function(status) {
                return status ? 'Activo' : 'Cancelado';
            }

            $scope.select = function(id) {
                $scope.selected = id;
            }

            $scope.newCompany = function() {
                $('#companyModal').openModal();
            }

            $scope.save = function() {
                Companies.save($scope.company, function(company) {
                	$location.path('/empresas/'+company.id);
                });
            };

            $scope.delete = function(company) {
                swal({
                    title: "¿Esta seguro?",
                    text: "La empresa no podrá ser recuperada!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, eliminar!",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: false
                }, function() {
                    company.$delete({
                        id: company.id
                    }, function() {
                        init();
                        swal("Eliminada!", "La empresa ha sido eliminada con exito.", "success");
                    });

                });
            };

        });
})();
