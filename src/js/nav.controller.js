'use strict';

angular
  .module('angularMovie')
  .controller('NavCtrl', NavCtrl);

  function NavCtrl(Movie, $http, API_URL, KEY) {
    var vm = this;
    var url = API_URL + '/search/movie?api_key=' + KEY + '&query=';
    vm.querySearch = function(query) {
      return $http.get(url + query)
      .then(function(re) {
        return re.data.results;
      })
    }
  }
