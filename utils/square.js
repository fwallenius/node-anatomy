
module.exports = function(width) {

  function calculateMyArea() {
    return width * width;
  }


  return {
    area: function() {
      //Calling a private function to get the result
      var myArea = calculateMyArea();
      return myArea;
    }
  };
}

