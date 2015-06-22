(function() {
  'use strict'

  angular.module('sidcasoft')
  .config(function($routeProvider){
    $routeProvider.when('/login',{
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/',{
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/home',{
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/proyectos',{
      templateUrl: 'views/projects.html',
      controller: 'ProjectsController'
    })
    .when('/empresas',{
      templateUrl: 'views/companieslist.html',
      controller: 'CompaniesListController'
    })
    .when('/empresas/:companyId',{
      templateUrl: 'views/companies.html',
      controller: 'CompaniesController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    })

  })
  .run(['$rootScope', '$location', 'Auth', '_', function ($rootScope, $location, Auth, _) {

    var menus = [
      {
        str: 'Dashboard',
        url: 'views/home.html'
      },
      {
        str: 'Proyectos',
        url: 'views/projects.html'
      },
      {
        str: 'Empresas',
        url: 'views/companies.html'
      },
      {
        str: '',
        url: 'views/404.html'
      }
    ];

    $rootScope.$on('$routeChangeStart', function (event,next) {
      Auth.isLoggedIn(function(isLoggedIn){
        if(!isLoggedIn){
          $location.path('/login');
        }
        else{
          if(next.templateUrl == 'views/login.html'){
            $location.path('/home');
          }
          var menu = _.find(menus,function(menu){
            return menu.url == next.templateUrl;
          });
          $rootScope.$broadcast('routeBroadcast',menu);
        }
      });
    });

  }]);

})();

