!function(){
    "use strict";
    angular.module('ControllerAsApp', [])
    .controller('ParentController1', ParentController1)
    .controller('ChildController1', ChildController1)
    // .controller('ParentController2', ParentController2)
    // .controller('ChildController2', ChildController2);
    
    ParentController1.$inject = ['$scope'];
    function ParentController1($scope) {
      $scope.parentValue = 1;
      $scope.parentName = "";
      $scope.childName = "";
      $scope.key = 12345;
      $scope.submit = function(){
          $scope.childName = $scope.parentName;
      }
    }
       
    ChildController1.$inject = ['$scope'];
    function ChildController1($scope) {
      $scope.childValue = 2;
      $scope.childName = $scope.parentName;
      $scope.key = 6789;
    }
    
    // ** Controller As syntax
    // function ParentController2() {
    //   var parent = this;
    //   parent.value = 3;
    // }
    // function ChildController2() {
    //   var child = this;
    //   child.value = 4;
    // }
}();