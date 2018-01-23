angular.
  module('myApp.aboutMe').
  component('aboutMe', {
    templateUrl: 'about-me/about-me.template.html',
    controller: ['$http', '$routeParams',
      function AboutMeController($http, $routeParams) {

      }
    ]
  });
