/* jshint esversion: 6 */
var path = require('path');
var hello = "Hello World from NodeJS";
var justNode = hello.slice(17);


console.log(`Rock on World from ${justNode}`);
console.log(__dirname);
console.log(__filename);
console.log(`Rock on World from ${path.basename(__filename)}`);
