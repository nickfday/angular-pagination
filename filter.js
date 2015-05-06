/**
 * @file
 * Peak Search currency filter.
 */

(function () {

  "use strict";

  /* Filter to create integer into currency and remove decimal places */
  angular.module('ui.bootstrap.demo').filter('offset', ['$filter', '$locale', function (filter, locale) {
    return function(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  }]);

})();