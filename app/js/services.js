'use strict';

/* Services */

function Greeter() {
  this.greet = function(a) {
    return 'Hello ' + a;
  };
}

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('tomorrow', function() {
    return new Date();
  }).
  factory('today', function() {
    return new Date();
  }).
  factory('greeter', function() {
    return new Greeter();
  }).
  factory('persistencejs', function() {
    persistence.store.websql.config(persistence, 'todos-angularjs', 'todo database', 5*1024*1024);
    var models = {};
    models.Todo = persistence.define('todo', {
      title: 'TEXT',
      completed: 'BOOL'
    });
    persistence.schemaSync();

    return {
      persistence: persistence,
      models: models
    };
  });
