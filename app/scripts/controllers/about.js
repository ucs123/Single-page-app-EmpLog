'use strict';

/**
 * @ngdoc function
 * @name empLogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the empLogApp
 */
angular.module('empLogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
