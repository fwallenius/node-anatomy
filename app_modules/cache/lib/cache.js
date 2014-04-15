
    // External dependency for this package:
var debug = require('debug')('simple-cache-library:cache'),
    // Internal dependency for this file, located in the same folder:
    map = require('./map.js');


module.exports = function(name) {

  debug('Cache ' + name + ' created');

  var internalMap = new map();


  return {
    put: function(key, val) {

      debug('Putting object with key ' + key + ' in cache ' + name);

      // Other cache-related logic would be found here
      // For example setting a timestamp of this entry

      internalMap.set(key, val);
    },

    get: function(key) {

      debug('Fetching object with key ' + key + ' from cache ' + name);

      // Same here, other cache-related logic would be found here

      return internalMap.get(key);
    },

    size: function() {
      return internalMap.size();
    }
  }
}