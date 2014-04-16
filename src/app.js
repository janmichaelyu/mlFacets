
(function () {
  'use strict';

  angular.module('mlFacets', [])
    .controller('FacetController', ['$scope', function($scope) {

      var model = {
        facets: {
          'fname': {
            facetValues: [
              {
                name: 'Alice',
                count: 5
              },
              {
                name: 'Bob',
                count: 3
              }
            ]
          }
        },
        selected: []
      };

      angular.extend($scope, {
        model: model,
        selectFacet: function(facet, value) {
          var existing = model.selected.filter( function( selectedFacet ) {
            return selectedFacet.facet === facet && selectedFacet.value === value;
          });
          if ( existing.length === 0 ) {
            model.selected.push({facet: facet, value: value});
          }
        },
        clearFacet: function(facet, value) {
          var i;
          for (i = 0; i < model.selected.length; i++) {
            if (model.selected[i].facet === facet && model.selected[i].value === value) {
              model.selected.splice(i, 1);
              break;
            }
          }
        }
      });
    }]);
}());
