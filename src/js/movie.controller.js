'use strict';

angular
  .module('angularMovie')
  .controller('MovieCtrl', MovieCtrl);

  function MovieCtrl(Movie, $scope) {
    Movie.getPopular((res) => {
      $scope.movies = res.results;
    })
    Movie.getConfig((data) => {
      $scope.config = {
        base_url: data.images.base_url,
        poster_size: data.images.poster_sizes[3]
      }
    });
  }
