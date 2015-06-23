;(function (){

  'use strict';

  angular.module('counterModule', [])

  .controller('counterController', ['$scope', function ($scope){
      //Initialize Counter at 0 that will bind to home page
      $scope.likes = 0;
      //Make counting function
      $scope.addLike = function () {
        $scope.likes += 1;
        $scope.checkP(); // Checks pluralirty on every click
      };


      //Start of pluralization function
      $scope.checkP = function () {
        if ($scope.likes !== 1) {
          $scope.plural = "likes";
        } else if ($scope.likes === 1){
          $scope.plural ="like";
        } 
      };
      // Run Pluralrity checker immediately
      $scope.checkP();

    }
  ]);
}());