'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'version', 'today', function($scope, version, today) {
    $scope.greet = today;
    console.log($scope);

  }])
  .controller('MyCtrl2', [function() {

  }]);
