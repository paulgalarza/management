(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Processes', function($resource){
			return $resource('processes', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();

