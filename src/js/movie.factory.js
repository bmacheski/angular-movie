'use strict';

angular
  .module('angularMovie')
  .factory('Movie', Movie);

  function Movie($http, API_URL, KEY) {
    return {
      getPopular(cb) {
        $http
          .get(API_URL + '/movie/popular?api_key=' + KEY)
          .success(cb)
      },
      getConfig(cb) {
        $http
          .get(API_URL + '/configuration?api_key=' + KEY, {cache: true})
          .success(cb)
      }
    }
  }
