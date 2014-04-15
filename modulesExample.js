
var Circle = require('./utils/circle');
var Square = require('./utils/square');

// A static function in "utils/circle.js"
var myCircleArea = Circle.area(1337);
console.log("The circle area is: " + myCircleArea);

// The Square object is a constructor for "utils/square.js".
// Can be used with or without the 'new' keyword.
var mySquareA = Square(2),
    mySquareB = new Square(8);

console.log("Square A's area: " + mySquareA.area());
console.log("Square B's area: " + mySquareB.area());

