angular
	.module('angularMovie', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/search.html',
				controller: 'MainCtrl'
			})
	})
	.controller('MainCtrl', function(Movie, $scope){
		Movie.getPopular(function(res){
			$scope.movies = res.results;
		})
		Movie.getConfig(function(data){
			$scope.config = {
				base_url: data.images.base_url,
				poster_size: data.images.poster_sizes[0]
			}
		console.log($scope.config)
		})
	})
	.factory('Movie', function($http) {
		return {
			getPopular(cb) {
				$http
					.get('http://api.themoviedb.org/3/movie/popular?api_key=72d762d5789d7d573d7da88c3a5638a7')
					.success(cb)
			},
			getConfig(cb) {
				$http
					.get('http://api.themoviedb.org/3/configuration?api_key=72d762d5789d7d573d7da88c3a5638a7')
					.success(cb)
			}
		}
	})


