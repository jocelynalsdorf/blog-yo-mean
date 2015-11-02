'use strict';

/**
 * @ngdoc service
 * @name yotodoApp.myFactory
 * @description
 * # myFactory
 * Factory in the yotodoApp.
 */
angular.module('yotodoApp')
  .factory('myFactory', function () {
   
    var meaningOfLife = 42;

    // Public API here
     return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id == id) {
          return collection[i];
        }
      }
      return null;
    }
  });
