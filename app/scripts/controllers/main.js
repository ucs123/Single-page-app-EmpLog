'use strict';

/**
 * @ngdoc function
 * @name empLogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the empLogApp
 */
angular.module('empLogApp')
  .controller('ListCtr', function ($scope, $location, copyuserdata, dataService) {
    $scope.user =dataService.list();
    $scope.edit = function (id) {
        $scope.newdata = angular.copy(dataService.get(id));
        $scope.maindata = function(){
            copyuserdata.setdata($scope.newdata);
        }();
        $location.path('/edit');
    };
    $scope.delete = function (id) {
        $scope.newdata = angular.copy(dataService.get(id));
        dataService.delete($scope.newdata.id);
    };
  });
