'use strict';

/**
 * @ngdoc overview
 * @name messagesApp
 * @description
 * # messagesApp
 *
 * Main module of the application.
 */
angular
  .module('messagesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
