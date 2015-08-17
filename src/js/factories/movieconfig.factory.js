/**
 * Gets configuration data required for movie posters & banners
 */

'use strict';

angular
  .module('angularMovie')
  .factory('MovieConfig', MovieConfig);

  function MovieConfig($http, $q, API_URL, KEY) {
    var config;
    var confobj = {};

    confobj.getConfig = function() {
      return (config) ?
      $q.when(config) :
      $http
        .get(API_URL + `/configuration?api_key=${KEY}`)
        .then((res) => {
          config = res.data
          return config
        })
      }
    return confobj;
  }
