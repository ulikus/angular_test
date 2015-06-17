'use strict';

describe('Filter: imageOrTextFilter', function () {

  // load the filter's module
  beforeEach(module('messagesApp'));

  // initialize a new instance of the filter before each test
  var imageOrTextFilter;
  beforeEach(inject(function ($filter) {
    imageOrTextFilter = $filter('imageOrTextFilter');
  }));

  it('should return the input prefixed with "imageOrTextFilter filter:"', function () {
    var text = 'angularjs';
    expect(imageOrTextFilter(text)).toBe('imageOrTextFilter filter: ' + text);
  });

});
