'use strict';

angular
  .module('angularMovie')
  .factory('Movie', Movie);

  function Movie($http, $q, API_URL, KEY) {
    var data;
    var obj = {};

    // gets trending movies whether or not API call has been performed
    obj.getPopular = function() {
      return (data) ?
      $q.when(data) :
      $http
        .get(API_URL + `/movie/popular?api_key=${KEY}`)
        .then((res) => {
          data = res.data;
          return data;
        })
    }
    return obj;
  }
