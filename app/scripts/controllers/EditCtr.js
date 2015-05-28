'use strict';

app.controller('EditCtr', function ($scope, $location, copyuserdata, dataService) {

    /*if(!copyuserdata.isLoggedIn()) {
        $location.path("/")
    }*/

    $scope.copydata = copyuserdata.getdata();
    $scope.saveContact = function () {
        //$scope.copydata = copyuserdata.getdata();
        dataService.save($scope.copydata);
        $scope.copydata = {};
        console.log($scope.copydata.id);
    };
    $scope.cancel = function (){
    	$scope.copydata = {};
    };
});
