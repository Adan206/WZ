'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */

  angular.module('WeatherZone')
    .controller('MainCtrl', function ($scope, current) {
      $scope.current = current.query();

      $scope.refreshCurrent = function(){
          $scope.current = current.query({
              location: $scope.location
          });
      };
    });
