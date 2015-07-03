(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('UserRoles', function($resource){
			return $resource('userroles', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();