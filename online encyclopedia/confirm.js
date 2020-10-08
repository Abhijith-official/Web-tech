(function () {
    'use strict';
      
      angular.module('confirmApp', [])
      .controller('filController', filController)
      .filter('likes',LikesFilter)
      .filter('likesall',LikesAllFilter);
  
      filController.$inject = ['$scope', 'likesFilter'];
      function filController($scope,likesFilter) {
        $scope.message = "";
        $scope.sayMessage = function () {
          var msg="I do custom filter";
          return msg;
        };
        $scope.sayLikesMessage = function () {
          var msg= $scope.message;
          msg = likesFilter(msg);
          return msg;
        };
      }
      function LikesFilter(){
        return function (input) {
          input = input || "";
          input = input.replace(".",". The information has been submitted. Thank you.");
          return input;
        };
      }
      function LikesAllFilter(){
        return function (input,target,replace) {
          input = input || "";
          input = input.replace(target,replace);
          return input;
        };
      }
      })();