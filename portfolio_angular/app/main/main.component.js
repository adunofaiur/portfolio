angular.
  module('myApp.main').
  component('main', {

    templateUrl: 'main/main.template.html',
    controller: ['$http', '$routeParams',
      function mainCtrl($http, $routeParams) {
        var self = this;

        $http.get('/papers.json').then(function(response) {
          self.papers = response.data.papers;

        });
        $http.get('/app/papers.json').then(function(response) {
console.log('yassss')
        });
      }
    ]
  });
