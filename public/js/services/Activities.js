(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Activities', function($resource){
			return $resource('activities', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();