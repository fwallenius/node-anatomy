// This example shows how to setup a more advanced application module
// in its own folder with a package.json file defining an entry point
// Run with:
// export DEBUG=simple-cache-library:* && node modulesExample2.js


var Cache = require("./app_modules/cache");


// Create two caches
var catCache = Cache("cats"),
    dogCache = Cache("dogs");


// Populate with some pets
catCache.put("MrSmith", {color: "Black"});
catCache.put("Nelson", {color: "White"});
dogCache.put("Rex", {dangerous: true});

console.log("I have " + catCache.size() + " cats and " + dogCache.size() + " dog.");
// I have 2 cats and 1 dog.

console.log("Nelson is " + catCache.get("Nelson").color);
// Nelson is White

console.log("Do I have a dog named MrSmith? " + dogCache.get("MrSmith"));
// Do I have a dog named MrSmith? undefined

