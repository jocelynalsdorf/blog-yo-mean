'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addToDo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeToDo = function(index){
      $scope.todos.splice(index,1);
    };
  });
