'use strict';

angular
  .module('angularMovie')
  .controller('NavCtrl', NavCtrl);

  function NavCtrl(Movie, $http, API_URL) {
    var vm = this;
    var url = API_URL + '/search/movie?api_key=72d762d5789d7d573d7da88c3a5638a7&query=';
    vm.querySearch = function(query) {
      return $http.get(url + query)
      .then(function(re) {
        return re.data.results;
      })
    }
  }
