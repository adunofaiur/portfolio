'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.projects',
  'myApp.lgbtVisibility',
  'myApp.paperInfo',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/papers/:paperKey', {
          template: '<paper-info></paper-info>'
        }).when('/projects', {
                template: '<projects></projects>'
              }).
        otherwise({redirectTo: '/main'});
}]);
