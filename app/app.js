'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.projects',
  'myApp.lgbtVisibility',
  'myApp.paperInfo',
  'myApp.main',
  'myApp.paperList',
  'myApp.aboutMe',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/papers/', {
      template: '<paper-list></paper-list>'
    }).
    when('/aboutMe',{
      template: '<about-me></about-me>'
    }).
    when('/papers/:paperKey', {
      template: '<paper-info></paper-info>'
    }).
    when('/projects', {
      template: '<projects></projects>'
    }).
    when('/main', {
      template: '<main></main>'
    }).
    otherwise({redirectTo: '/main'});
}]);
