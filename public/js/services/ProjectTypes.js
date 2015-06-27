(function(){
	'use strict'
	angular.module('sidcasoft')
		.factory('ProjectTypes', function($resource){
			return $resource('projecttypes', { id: '@_id' }, {
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
			});
		});
})();