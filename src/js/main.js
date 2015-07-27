'use strict';

angular
	.module('angularMovie', ['ngRoute', 'ngMaterial'])
	.config(config);

	function config($routeProvider)	{
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MovieCtrl',
				controllerAs: 'movie'
			})
	}
