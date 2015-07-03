(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Companies', function($resource){
			return $resource('companies', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();

