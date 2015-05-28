(function () {
    'use strict';

angular
  .module('empLogApp').factory('copyuserdata', function($location){
	var copydata;
	var _loggedIn = false;
	var service = {
		getdata : getdata,
		setdata : setdata,
		checkLogin : checkLogin,
		isLoggedIn : isLoggedIn

	};
	return service;

	function isLoggedIn() {
		return _loggedIn;
	}  
	function checkLogin(usr) {
		var data = JSON.parse(localStorage.getItem("contacts"));
		for(var _dta in data) {
			console.log(_dta);
			if(usr.name == data[_dta].name && usr.password == data[_dta].password) {
				alert("doen");
				_loggedIn = true;
				$location.path("/list");
			} else {
				alert("Invalid user name and password");
				$location.path("/");
			}
		}
		
	}

	function getdata() {
		return copydata;
	}
	function setdata(data){
		copydata = data;
	}
});

})();