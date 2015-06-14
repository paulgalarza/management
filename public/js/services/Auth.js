(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Auth', function($http,$rootScope){
			var user = undefined;
			return{
				getUser: function(){
					return user;
				},
				isLoggedIn : function(callback){
					if(user === undefined){
						$http.get('isLoggedIn').
						success(function(response, status, headers, config) {
						    if(response.status){
								user = response.data;
							}
							$rootScope.$broadcast('loginBroadcast',response.status);
							callback(response.status)
						});
					}
					else{
						$rootScope.$broadcast('loginBroadcast',user !== null);
						callback(user !== null);
					}
				},
				login : function(userData,callback){
					$http.post('login', userData).
					success(function(response, status, headers, config) {
						user = response.data || null;
						$rootScope.$broadcast('loginBroadcast',response.status);
						callback(response.status);
					});
				},
				logout : function(callback){
					$http.post('logout', {});
					user = null;
					callback();
				}
			}
		});
})();

