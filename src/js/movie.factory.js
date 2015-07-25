'use strict';

angular
  .module('angularMovie')
  .factory('Movie', Movie);

  function Movie($http, API_URL) {
    return {
      getPopular(cb) {
        $http
          .get(API_URL + '/movie/popular?api_key=72d762d5789d7d573d7da88c3a5638a7')
          .success(cb)
      },
      getConfig(cb) {
        $http
          .get(API_URL + '/configuration?api_key=72d762d5789d7d573d7da88c3a5638a7')
          .success(cb)
      }
    }
  }
