'use strict';

angular.module('angularMovie').controller('SearchInfoCtrl', SearchInfoCtrl);

function SearchInfoCtrl(MovieConfig, Movie, $routeParams, $scope, $rootScope) {
  var searchres = $rootScope.searchresults;
  var foundId = $routeParams.searchId;
  for (var i = 0; i < searchres.length; i++) {
    if (searchres[i].id == foundId) {
      $scope.foundMovie = searchres[i];
    }
  }
  MovieConfig.getConfig().then(function (data) {
    $scope.config = {
      base_url: data.images.base_url,
      backdrop_size: data.images.backdrop_sizes[2]
    };
  });
}
