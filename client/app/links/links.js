angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.cheese = 'hamburger';
  $scope.getLinks = function(data) {
    console.log("CALLS GET LINKS");
    Links.getLinks()
    .then(function(data) {
      console.log("DATA from GETLINKS: ", data);
   //   console.log(data[0].title);
      $scope.data.links = data;
    })
  };
  $scope.getLinks();
});
  // $scope.$on('$viewContentLoaded', function() {
  //   console.log("THIS in LINKS.JS: ", this);
  //   this.getLinks();
  // });
  // $scope.init = function() {
  //   $scope.getLinks();
  // };
  // $scope.init();  

/*
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});

*/