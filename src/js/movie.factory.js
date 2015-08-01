'use strict';

angular
  .module('angularMovie')
  .factory('Movie', Movie);

  function Movie($http, $q, API_URL, KEY) {
    var data = [],
        promise;
    return {
      getPopular() {
        if(!promise) {
          promise = $http
            .get(API_URL + `/movie/popular?api_key=${KEY}`)
            .then((res) => {
              data = res.data;
              return data;
            }, (res) => {
              return $q.reject(res);
              })
        }
        return promise;
      }
    }
  }
