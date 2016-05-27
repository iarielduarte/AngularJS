'use strict';

/**
 * @ngdoc function
 * @name holaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the holaApp
 */
angular.module('holaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
