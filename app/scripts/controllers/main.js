'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function(){
      localStorageService.set('todos', $scope.todos);
    }, true);


    $scope.addToDo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeToDo = function(index){
      $scope.todos.splice(index,1);
    };
    // $scope.editTodo = function(index) {
    //   var i = $scope.todos.indexOf(index);
    //   $scope.todos[i] = $scope.todo
    // }
  });
