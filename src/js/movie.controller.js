'use strict';

angular
  .module('angularMovie')
  .controller('MovieCtrl', MovieCtrl);

  function MovieCtrl(Movie, MovieConfig, $scope) {
    MovieConfig
      .getConfig()
      .then((data) => {
        $scope.config = {
          base_url: data.images.base_url,
          poster_size: data.images.poster_sizes[3]
        }
    });

    Movie
      .getPopular()
      .then((response) => {
        $scope.movies = response.results;
    });
  }
