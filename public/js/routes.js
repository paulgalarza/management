(function() {
    'use strict'

    angular.module('sidcasoft')
        .config(function($routeProvider) {
            $routeProvider.when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })
                .when('/proyectos', {
                    templateUrl: 'views/projectslist.html',
                    controller: 'ProjectsListController'
                })
                .when('/empresas', {
                    templateUrl: 'views/companieslist.html',
                    controller: 'CompaniesListController'
                })
                .when('/empresas/:companyId', {
                    templateUrl: 'views/company.html',
                    controller: 'CompanyController'
                })
                .when('/clientes', {
                    templateUrl: 'views/customerslist.html',
                    controller: 'CustomersListController'
                })
                .when('/clientes/:customerId', {
                    templateUrl: 'views/customer.html',
                    controller: 'CustomerController'
                })
                .when('/usuarios', {
                    templateUrl: 'views/userslist.html',
                    controller: 'UsersListController'
                })
                .when('/usuarios/:userId', {
                    templateUrl: 'views/user.html',
                    controller: 'UserController'
                })
                .otherwise({
                    templateUrl: 'views/404.html'
                })

        })
        .run(['$rootScope', '$location', 'Auth', '_', function($rootScope, $location, Auth, _) {

            var menus = [{
                str: 'Dashboard',
                url: 'views/home.html'
            }, {
                str: 'Proyectos',
                url: 'views/projectslist.html'
            }, {
                str: 'Empresas',
                url: 'views/companieslist.html'
            }, {
                str: 'Clientes',
                url: 'views/customerslist.html'
            }, {
                str: 'Usuarios',
                url: 'views/userslist.html'
            }, {
                str: '',
                url: 'views/404.html'
            }];

            $rootScope.$on('$routeChangeStart', function(event, next) {
                Auth.isLoggedIn(function(isLoggedIn) {
                    if (!isLoggedIn) {
                        $location.path('/login');
                    } else {
                        if (next.templateUrl == 'views/login.html') {
                            $location.path('/home');
                        }
                        var menu = _.find(menus, function(menu) {
                            return menu.url == next.templateUrl;
                        });
                        $rootScope.$broadcast('routeBroadcast', menu);
                    }
                });
            });

        }]);

})();
