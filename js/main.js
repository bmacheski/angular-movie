'use strict';

angular.module('angularMovie', ['ngRoute', 'ngMaterial']).config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'MovieCtrl',
    controllerAs: 'movie'
  }).when('/movie/:movieId', {
    templateUrl: 'views/movieinfo.html',
    controller: 'MovieInfoCtrl',
    controllerAs: 'info'
  }).when('/movie/search/:searchId', {
    templateUrl: 'views/movieinfo.html',
    controller: 'SearchInfoCtrl',
    controllerAs: 'search'
  });
}
