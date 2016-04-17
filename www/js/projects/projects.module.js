angular
  .module('app.projects', ['ui.router'])

  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'js/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'projects'
      });

  }]);
