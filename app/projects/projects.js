'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'projectsCtrl'
  });
}])

.controller('projectsCtrl', function($scope) {
  $scope.projects = [
    
    {
      name: "LGBT+ Vsibility",
      blurb: "lorem ipsum facto oreonum",
      image: "images/placeholder.jpg",
      link: "#!/papers/lgbtVisibility"
    },
    {
      name: "popHistory",
      blurb: "lorem ipsum facto oreonum",
      image: "images/placeholder.jpg",
      link: "#!/papers/popHistory"
    },
    {
      name: "Strategies of Free-Form Web Curation",
      blurb: "lorem ipsum facto oreonum",
      image: "images/placeholder.jpg",
      link: "#!/papers/freeFormCuration"
    },
    {
      name: "Beyond Slideware",
      blurb: "lorem ipsum facto oreonum",
      image: "images/placeholder.jpg",
      link: "#!/papers/beyondSlideware"
    }

  ];

});
