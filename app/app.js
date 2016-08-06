'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.controller('MyController', function($scope){
	$scope.clock = {
		now: new Date()
	};
	
	var updateClock = function(){
		$scope.clock.now = new Date();
	};

	setInterval(function(){
		$scope.$apply(updateClock);
	}, 1000);

	updateClock();
})
