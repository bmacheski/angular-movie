'use strict';

angular.module('angularMovie').controller('MovieInfoCtrl', MovieInfoCtrl);

function MovieInfoCtrl(MovieConfig, Movie, $routeParams, $scope) {
  MovieConfig.getConfig().then(function (data) {
    $scope.config = {
      base_url: data.images.base_url,
      backdrop_size: data.images.backdrop_sizes[2]
    };
  });

  Movie.getPopular().then(function (response, movieId) {
    var data = response.results;
    var movieId = $routeParams.movieId;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == movieId) {
        $scope.foundMovie = data[i];
      }
    }
  });
}
