(function() {
  'use strict';

  angular.module('healthCheckWidget', ['ngAnimate', 'ngResource', 'ngRoute', 'toastr', 'ui.bootstrap', 'ngBootstrap'])


	angular.injector(['ng']).get('$http').get('/app/json/env.config.json')
     .then(function (res) {
        angular.module('env', []).constant('APP_ENV', res.data);
        angular.element(document).ready(function() {
        angular.bootstrap(document, ['healthCheckWidget', 'env']);
    });
  });

  angular.module('healthCheckWidget').config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
