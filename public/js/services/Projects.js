(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Projects', function($resource){
			return $resource('projects', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();