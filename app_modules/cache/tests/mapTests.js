var assert = require('assert'),
    Map = require('../lib/map');

describe('cacheMap', function(){

  var map;

  beforeEach(function(done) {
    map = new Map();
    done();
  });

  describe('size', function() {
    
    it('should return 0 when empty', function() {
      assert.equal(0, map.size());
    });

    it('should return 1 when having one item', function() {
      map.set('foo', 'bar');
      assert.equal(1, map.size());
    });
  });

  describe('get and set', function() {

    it('should give correct item back', function() {
      map.set('foo', 'bar');
      assert.equal('bar', map.get('foo'));
    });

    it('should return undefined for un-set keys', function() {
      assert.equal(undefined, map.get('foo'));
    });
  });

});