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
      name: "kidGab: Moderating Social Media for Children",
      blurb: "lorem ipsum facto oreonum",
      image: "images/placeholder.jpg",
      link: "#!/kidgab"
    },
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
    }

  ];

});
