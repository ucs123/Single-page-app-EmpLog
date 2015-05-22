'use strict';

/**
 * @ngdoc function
 * @name empLogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the empLogApp
 */
angular.module('empLogApp')
  .controller('LoginCtr', function ($scope,dataService, $location) {
    $scope.login = function (){
    	$location.path('/list');
    };
  });
