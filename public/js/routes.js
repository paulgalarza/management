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
    .otherwise({
      templateUrl: 'views/404.html'
    })

  })
  .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event,next) {
        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            //event.preventDefault();
            //$location.path('/login');
        }
        else {
          if(next.templateUrl == 'views/login.html'){
            $location.path('/home');
          }
            console.log('ALLOW');
            //$location.path('/home');
        }
    });

  }]);

})();

