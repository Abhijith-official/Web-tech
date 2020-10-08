'use strict';
var app = angular.module('requestApp', []);

app.controller('FormController', function($scope) {
    $scope.n2 = "";
    $scope.master = {};

    $scope.save= function(employee) {
        $scope.master = angular.copy(employee);
    };

    $scope.reset = function() {
        $scope.employee = angular.copy($scope.master);
    };

    $scope.reset();
});

app.controller('countController', countController);
function countController($scope) {
    $scope.n1 = "";
    $scope.n2 = "";
    $scope.counter = 0;

    $scope.kp1 = 0;
    $scope.kp2 = 50;
    $scope.const = 50;
    $scope.cal = function () {

        $scope.counter = $scope.counter + 1;

        if ($scope.counter > $scope.n2.length) {
            $scope.kp2 = $scope.const - $scope.n2.length;
        }



    }


};

