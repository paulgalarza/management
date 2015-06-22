(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Customers', function($resource){
			return $resource('customers', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();