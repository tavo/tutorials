'use strict';

/**
 * @ngdoc function
 * @name tutorialsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutorialsApp
 */
angular.module('tutorialsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
