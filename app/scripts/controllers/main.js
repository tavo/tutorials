'use strict';

/**
 * @ngdoc function
 * @name tutorialsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutorialsApp
 */
angular.module('tutorialsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
