'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('MyCtrl1',
  ['$scope', 'tomorrow', 'version', 'today', 'greeter', 'persistencejs', function($scope, tomorrow, version, today, greeter, persistencejs) {
    $scope.today = today;
    $scope.tomorrow = tomorrow;
    $scope.greet = greeter.greet('bojan');

    $scope.delete = function(id) {
      persistencejs.models.Todo.all()
      .filter('id', '=', id).destroyAll(null, function() {
        $scope.getObjectList();
      });
    };

    $scope.insert = function(object) {
      var todo = new persistencejs.models.Todo(object);
      persistencejs.persistence.add(todo);
      persistencejs.persistence.flush(function() {
        $scope.getObjectList();
      });
    };

    $scope.getObjectList = function() {
      persistencejs.models.Todo.all().list(null, function(results) {
        $scope.objectList = results;
        $scope.$apply();
      });
    };

    $scope.getObjectList();
  }])

  .controller('MyCtrl2', [function() {

}]);
