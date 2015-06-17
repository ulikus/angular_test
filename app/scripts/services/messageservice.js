'use strict';

/**
 * @ngdoc service
 * @name messagesApp.messageService
 * @description
 * # messageService
 * Service in the messagesApp.
 */
angular.module('messagesApp')
  .service('messageService', function ($http) {
    var service = {
      messages: {},
      load: load
    };

    function load() {
      var expiry = new Date().getTime();
      $http.get('/data/messages.json').success(function(data) {
        data.map(function(d) {
          d.added = expiry;
        });
        service.messages = data;
      }).error(function(data) {
        console.log('something went wrong');
      });
    }

    return service;
  });
