angular.
  module('myApp.paperInfo').
  component('paperInfo', {
    templateUrl: 'paper-info/paper-info.template.html',
    controller: ['$http', '$routeParams',
      function PaperInfoController($http, $routeParams) {
        var self = this;

        $http.get('papers.json').then(function(response) {

          var papers = response.data.papers;
          for (var i = 0; i < papers.length; i++){
            if (papers[i].key == $routeParams.paperKey){
              self.paper = papers[i];
              return;
            }
          }
          return false;

        });
      }
    ]
  });
