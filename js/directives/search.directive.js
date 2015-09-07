'use strict';

angular.module('angularMovie').directive('navSearch', navSearch);

function navSearch($http, API_URL, KEY, Movie, $location) {
  return {
    restrict: 'E',
    templateUrl: 'views/navsearch.html',
    link: function link(scope, elem, attrs) {
      scope.searchresults;
      scope.opened = false;
      scope.search = function () {
        scope.opened = true;
        Movie.performSearch(scope.searchText).then(function (res) {
          scope.searchresults = res.data.results;
        });
      };
      // toggles opening and closing of search dropdown
      scope.toggleItems = function () {
        scope.opened = !scope.opened;
      };
      window.onclick = function () {
        scope.$apply();
        if (scope.opened) {
          scope.opened = !scope.opened;
        }
      };
    }
  };
}
