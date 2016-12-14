/* jshint esversion: 6 */
const fs = require('fs');

fs.readdirSync('./logs').forEach(function(fileName) {

    fs.unlinkSync('./logs/' + fileName);
});

fs.rmdir('./logs', function(err) {

    if (err) {
        throw err;
    } else {
        console.log("logs removed");
    }
});
