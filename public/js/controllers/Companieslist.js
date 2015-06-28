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

            $scope.removeCompany = function(company) {
                swal({
                    title: '¿Estás seguro de elimar la empresa?',
                    text: 'Si la eliminas, no podrás recuperar esta empresa!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Sí, Elimínala!',
                    cancelButtonText: 'No, cancelar',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        swal('Eliminado!', 'Tu empresa fue eliminada', 'success');
                        remove(company);
                    } else {
                        swal('Cancelado', 'Ha sido cancelado', 'error');
                    }
                });
            };

            var remove = function(company) {
                company.$delete(function(company) {
                    $location.path('/views/companieslist.html/');
                });
            };

        });
})();
