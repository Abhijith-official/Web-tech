(function () {
    "use strict";
    angular.module('countApp', [])
        .controller('countController', countController);

    function countController($scope) {
        $scope.n1 = "";
        $scope.n2 = 50;
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


    }

})();