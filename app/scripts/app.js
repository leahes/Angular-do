(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'

    })

    .state('archive', {
      url: '/archive',
      controller: 'ArchiveCtrl as archive',
      templateUrl: '/templates/archive.html'
    })

    $stateProvider
    .state('history', {
      url:'/history',
      controller: 'HistCtrl as history',
      templateUrl: '/templates/history.html'
    });
  }

  angular
  .module('projectName', ['ui.router', 'firebase'])
  .config(config);
})();
