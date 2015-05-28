'use strict';

/**
 * @ngdoc overview
 * @name empLogApp
 * @description
 * # empLogApp
 *
 * Main module of the application.
 */
var app = angular
  .module('empLogApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtr',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtr'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtr'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.run(function ($rootScope, $location, copyuserdata) { 
            $rootScope.$on( "$routeChangeStart", function(event, next, current) { 
             if(!copyuserdata.isLoggedIn()){
              if ( next.templateUrl === "views/login.html") {
                 }
               else {
                  $location.path("/login");
                }
             }
         });
  });
