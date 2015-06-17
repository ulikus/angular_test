'use strict';

/**
 * @ngdoc filter
 * @name messagesApp.filter:imageOrTextFilter
 * @function
 * @description
 * # imageOrTextFilter
 * Filter in the messagesApp.
 */
angular.module('messagesApp')
  .filter('imageOrTextFilter', function ($sce) {
    return function (input) {
      if ( input && input.indexOf('data:image/jpeg;base64')=== 0 ) {
        return $sce.trustAsHtml('<img src="'+input+'">');
      } else {
        return input;
      }
    };
  });
