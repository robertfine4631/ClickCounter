;(function (){

  'use strict';

  angular.module('counterModule', [])

  .controller('counterController', ['$scope', function ($scope){
//creating an array to count the likes
    $scope.allLikes = [];

//creating constructor for the like
    var allLikes = function (likeNum) {

    };
//Counter of array
   $scope.numberOf = function () {
      var likes = _.filter($scope.allLikes, function (x){
        return x.length;

      });
      return numberOf.length;
    };

    

//Push to button
    $scope.addLike = function (lke) {
      var likenum = new allLikes(lke.like);
      $scope.allLikes.push(lke);

    };

    }
  ]);
}());