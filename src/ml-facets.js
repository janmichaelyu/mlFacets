(function () {

  'use strict';

  var module = angular.module('mlFacets');

  module.directive('mlFacets', [function () {
    return {
      restrict: 'AE',
      scope: {
        facets: '=facetList',
        selected: '=selected',
        select: '&select',
        clear: '&clear'
      },
      templateUrl: 'ml-facets.html',
      link: function() {
      }
    };
  }]);
}());
