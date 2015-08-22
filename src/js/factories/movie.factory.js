'use strict';

angular
  .module('angularMovie')
  .factory('Movie', Movie);

  function Movie($http, $q, API_URL, KEY) {
    var obj = {};
    var data;

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

    obj.performSearch = function(text) {
      var search;
      var url = API_URL + `/search/movie?api_key=${KEY}&query=`;
      return (search) ?
      $q.when(search) :
        $http
          .get(url + text)
          .success((res) => {
            search = res.results;
            return search;
          })
    }
    return obj;
  }
