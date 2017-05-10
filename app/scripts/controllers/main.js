'use strict';

/**
 * @ngdoc function
 * @name WeatherZone.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WeatherZone
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
