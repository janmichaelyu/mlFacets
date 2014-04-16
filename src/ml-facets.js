(function () {

  'use strict';

  angular.module('mlFacets')
    .directive('mlFacets', [function () {
      return {
        restrict: 'AE',
        replace: true,
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
