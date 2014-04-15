

var Cache = require('./app_modules/cache')


// Create two caches
var catCache = Cache('cats'),
    dogCache = Cache('dogs');


// Populate with some pets
catCache.put('MrSmith', {color: "Black"});
catCache.put('Nelson', {color: "White"});
dogCache.put('Rex', {dangerous: true});

console.log('I have ' + catCache.size() + ' cats and ' + dogCache.size() + ' dogs.');
console.log('Nelson is ' + catCache.get('Nelson').color);
console.log('Do I have a dog named MrSmith? ' + dogCache.get('MrSmith'));
