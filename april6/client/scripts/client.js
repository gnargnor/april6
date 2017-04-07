var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.movie = MovieService.movie;
  // $scope.addToList = MovieService.addToList;

  $scope.getMovies = MovieService.getMovies;

  $scope.postMovie = MovieService.postMovie;
  $scope.getMovies();
}]);

myApp.controller('OutputController', ['$scope', '$http', 'MovieService', function($scope, $http, MovieService){
  // $scope.movie = MovieService.movie;
  // $scope.movieList = MovieService.movieList;
  // $scope.getMovies = MovieService.getMovies;
  $scope.movieObject = MovieService.movieObject;
  console.log($scope.movieList);

}]);

myApp.factory('MovieService', ['$http', function($http){
  var movie = {
    title : "",
    description : "",
    director : "",
    duration : "",
  };

  var movieObject = {
    movieList : []
  };


  // var addToList = function(data){
  //   var thisMovie = {
  //     title: data.title,
  //     description: data.description,
  //     director: data.director,
  //     duration: data.duration
  //   };
  //   movieList.push(thisMovie);
  //   console.log('test');
  // };

  var getMovies = function(){
    $http.get('/movies').then(function(response){
      // for (var i = 0; i < response.length; i++) {
      //   thisMovie = response[i];
      //   movieList.push(thisMovie);
      // }
      movieObject.movieList = response.data;
      console.log(movieObject.movieList);

    });
  };

  // getMovies();
  // console.log(movieList);

  var postMovie = function(data){
    var thisMovie = {
      title: data.title,
      description: data.description,
      director: data.director,
      duration: data.duration
    };
    console.log(thisMovie);
    $http.post('/movies', thisMovie).then(function(response){
      // var moviesListContainer = angular.element( document.querySelector( '#moviesListContainer' ) );
      // moviesListContainer.empty();
      getMovies();
    });
  };

  return {
    movie : movie,
    movieObject : movieObject,
    postMovie : postMovie,
    getMovies : getMovies,
    // addToList : addToList
    // resetForm : resetForm
  };
}]);
