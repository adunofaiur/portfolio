+'use strict';

angular.module('myApp.lgbtVisibility', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lgbtVisibility', {
    templateUrl: 'lgbt-visibility/lgbt-visibility.html',
    controller: 'lgbtVisibilityCtrl'
  });
}])

.controller('lgbtVisibilityCtrl', function($scope) {
  $scope.text = "lgbt vis test";
  

});
