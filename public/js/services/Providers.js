(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Providers', function(){
			return $resource('/providers', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();

