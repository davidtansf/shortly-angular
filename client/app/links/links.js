angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.cheese = 'hamburger';
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data) {
      console.log("DATA from GETLINKS: ", data);
      $scope.data.links = data;
    })
  };
  $scope.getLinks(); // not preferred way, done only to pass test
});