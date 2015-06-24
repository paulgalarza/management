(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('Requirements', function($resource){
			return $resource('requirements', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();

