angular.
  module('myApp.paperList').
  component('paperList', {
    templateUrl: 'paper-list/paper-list.template.html',
    controller: ['$http', '$routeParams',
      function PaperListController($http, $routeParams) {
        var self = this;

        $http.get('papers.json').then(function(response) {

          self.papers = response.data.papers;
          

        });
      }
    ]
  });
