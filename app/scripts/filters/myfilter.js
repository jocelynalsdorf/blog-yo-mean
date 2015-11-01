'use strict';

/**
 * @ngdoc filter
 * @name yotodoApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the yotodoApp.
 */
angular.module('yotodoApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
