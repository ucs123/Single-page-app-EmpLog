'use strict';

/**
 * @ngdoc function
 * @name empLogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the empLogApp
 */
angular.module('empLogApp')
  .controller('LoginCtr', function ($scope,dataService, $location, copyuserdata) {
  	$scope.user = {};
    $scope.login = function (){
    	copyuserdata.checkLogin($scope.user);
    };
  });
