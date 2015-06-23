;(function (){

  'use strict';

  angular.module('counterModule', [])

  .controller('counterController', ['$scope', function ($scope){
      //Initialize Counter at 0 that will bind to home page
      $scope.likes = 0;
      //Make counting function
      $scope.addLike = function () {
        $scope.likes += 1;
      };


    }
  ]);
}());