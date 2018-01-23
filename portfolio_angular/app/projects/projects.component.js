angular.
  module('myApp.projects').
  component('projects', {

    templateUrl: 'projects/projects.template.html',
    controller: ['$http', '$routeParams',
      function ProjectsCtrl($http, $routeParams) {
        var self = this;

        $http.get('projects/projects-data.json').then(function(response) {
          self.projects = response.data.projects;

        });
      }
    ]
  });
