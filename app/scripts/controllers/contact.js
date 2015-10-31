'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.nothing = [
      'burgers',
      'fries',
      'beer'
    ];
  });
