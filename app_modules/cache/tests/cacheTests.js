var assert = require('assert'),
    Cache = require('../lib/cache');

describe('Cache Lib', function() {

  describe('put and get', function() {

    it('Should return my object', function() {

      var cache = new Cache('CacheName');
      var bar = {
          'number': 14
      };

      cache.put('foo', bar);
      assert.equal(bar, cache.get('foo'));
    });

  });

});
