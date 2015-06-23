;(function (){

  'use strict';

  angular.module('counterModule', [])

  .controller('counterController', ['$scope', function ($scope){

//Created array for likes to be counted in
    $scope.allLikes = [];
//Create constructor for each like
    var like = function (addlike) {
      this.like = addlike;
    }




    }
  ]);
}());