'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
.run(function($rootScope){
	$rootScope.name = "World";
})
.controller('ParentsController', function($scope){
	$scope.person = {
		greeted: false
	};
})
.controller('ChildController', function($scope){
	$scope.sayHello = function(){
		$scope.person.name = "Irfan";
		$scope.greeted = true;
	};
})
.controller('ShowDateController', function($scope){
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
.controller('FirstController', function($scope){
	$scope.counter = 0;
	$scope.add = function(amount){
		$scope.counter += amount;
	};

	$scope.substract = function(amount){
		$scope.counter -= amount;
	};
})
