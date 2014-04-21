
// Really simple implementation of a key/value store that
// shouldn't be used by anybody
module.exports = function() {

  var map = {};

  return {
    set: function(key, val) {
      map[key] = val;
    },

    get: function(key) {
      if (map.hasOwnProperty(key)) {
        return map[key];
      }
    },

    size: function() {
      var amount = 0;
      for (var key in map) {
        if (map.hasOwnProperty(key)) {
          amount += 1;
        }
      }
      return amount;
    }
  };

};