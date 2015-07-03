(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Users', function($resource){
			return $resource('users', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();