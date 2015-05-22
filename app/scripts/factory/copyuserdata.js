(function () {
    'use strict';

angular
  .module('empLogApp').factory('copyuserdata', function(){
	var copydata;
	var service = {
		getdata : getdata,
		setdata : setdata
	};
	return service;

	function getdata() {
		return copydata;
	}
	function setdata(data){
		copydata = data;
	}
});

})();