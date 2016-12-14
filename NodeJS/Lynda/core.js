/* jshint esversion: 6 */
var path = require('path');
var util = require('util');
var v8 = require('v8');

var dirUpload = path.join(__dirname, 'www','files','uploads');

console.log(dirUpload);

util.log(dirUpload);

util.log(v8.getHeapStatistics());
