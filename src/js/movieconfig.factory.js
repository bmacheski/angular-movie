/**
 * Gets configuration data required for movie posters & banners
 */

'use strict';

angular
  .module('angularMovie')
  .factory('MovieConfig', MovieConfig);

  function MovieConfig($http, API_URL, KEY) {
    return {
      getConfig(cb) {
        $http
          .get(API_URL + `/configuration?api_key=${KEY}`)
          .success(cb)
      }
    }
  }
