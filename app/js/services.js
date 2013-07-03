'use strict';

/* Services */

function Greeter(a) {
  this.greet = function() {
    return 'Hello ' + a;
  }
}

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('today', function() {
    return new Date();
  }).
  service('greeter', Greeter);
