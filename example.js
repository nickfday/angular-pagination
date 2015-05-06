angular.module('ui.bootstrap.demo', ['ui.bootstrap']);

//angular.module('ui.bootstrap.demo');



(function () {

  "use strict";

angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.cars = ["Saab", "Volvo", "BMW", "HYNDAI", "Mercedes", "Renault","Nissan","Ford","Dodge"];
  $scope.totalItems = 64;
  $scope.currentPage = 4;
  $scope.itemsPerPage =2;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;


});

})();