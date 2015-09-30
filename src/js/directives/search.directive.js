'use strict';

angular
  .module('angularMovie')
  .directive('navSearch', navSearch);

  function navSearch($http, API_URL, KEY, Movie, $location) {
    return {
      restrict: 'E',
      templateUrl: 'views/navsearch.html',
      link: function(scope, elem, attrs) {
        scope.searchresults;
        scope.opened = false;

        scope.search = function() {
          if(scope.searchText) {
            scope.opened = true;
            Movie
              .performSearch(scope.searchText)
              .then((res) => {
                scope.searchresults = res.data.results;
              })
          }
        }

        window.onclick = function() {
          scope.$apply();
          scope.opened = false;
        };
      }
    }
  }
