'use strict';

/**
 * @ngdoc function
 * @name messagesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagesApp
 */
angular.module('messagesApp')
  .controller('MainCtrl', function ($scope, messageService, $interval) {

    messageService.load();

    $scope.$watch(function () { return messageService.messages }, function (newVal, oldVal) {
     if (newVal !== oldVal) {
       $scope.messages = messageService.messages;
       if ($scope.messages.length > 0) {
         $interval(function() {
           var now = new Date().getTime();
           angular.forEach($scope.messages, (function(m, i) {
             if (m.expiry + m.added < now) {
               delete $scope.messages[i];
             }
           }));
         }, 500);
       }
     }
     });
  });
