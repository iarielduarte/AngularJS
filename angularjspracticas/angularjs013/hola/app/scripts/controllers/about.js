'use strict';

/**
 * @ngdoc function
 * @name holaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the holaApp
 */
angular.module('holaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
