//comment
//
var app = angular.module("MyForm", []);
app.controller("FormController", function ($scope) {
    $scope.namePattern = "^[A-Za-z]{2,30}$";
}
