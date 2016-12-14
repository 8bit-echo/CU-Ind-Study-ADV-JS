/* jshint esversion: 6 */
var spawn = require('child_process').spawn;
var child = spawn("node", ["alwaysTalking"]);

child.stdout.on('data', function(data){
    console.log(`STDOUT: ${data.toString()}`);
});

child.on('close', function() {
    console.log("Child Process ended.");
    process.exit();
});

setTimeout(function () {
    child.stdin.write("stop");
}, 4000);
