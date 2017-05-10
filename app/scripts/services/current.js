'use strict';

/**
 * @ngdoc service
 * @name WeatherZone.current
 * @description
 * # current
 * Factory in the WeatherZone.
 */
 angular.module('WeatherZone')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&type=like&mode=json&APPID=c6652cd966bc34851add11456f4da83d', {}, {
      query: {
        method: 'GET',
        params: {
          location: 'seattle,us'
        },
        isArray: false
      }
    });
  });
