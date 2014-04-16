ngFacet
=======

AngularJS facet directive

Example use:

    <ml-facets facet-list="model.search.facets" selected="model.selected"
          select="selectFacet(facet, value)" clear="clearFacet(facet, value)"/>


Attributes
----------
* facet-list: the facets, including their values and counts
* selected: an array of selected facet values
* select: a function to call when a facet value gets clicked on
* clear: a function to call when a selected value is de-selected
