'use strict';

angular
  .module('angularMovie')
  .directive('navSearch', navSearch);

  function navSearch($http, API_URL, KEY) {
    return {
      restrict: 'E',
      templateUrl: 'views/navsearch.html',
      link: function(scope, elem, attrs) {
        scope.searchresults;
        scope.search = function() {
          var url = API_URL + `/search/movie?api_key=${KEY}&query=`;
          $http
            .get(url + scope.searchText)
            .success((res) => {
              scope.searchresults = res.results;
            })
        }
      }
    }
  }
