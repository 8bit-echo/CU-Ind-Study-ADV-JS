/* jshint esversion: 6 */
const https = require('https');
const fs = require('fs');

var options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Barack_Obama',
    method: 'GET'
};

var req = https.request(options, function(response) {
    var responseBody = '';
    console.log('Response from sever started');
    console.log(`Server Status: ${response.statusCode}`);
    console.log('Response Headers: %j', response.headers);
    response.setEncoding('UTF-8');
    response.once('data', function(chunk) {
        console.log(chunk);
    });

    response.on('data', function(chunk) {
        console.log(`==chunk== ${chunk.length}`);
        responseBody += chunk;
    });

    response.on('end', function() {
        fs.writeFile('barack-obama.html', responseBody, function(err) {
            if (err) {
                throw err;
            }
            console.log('File Downloaded');
        });
    });
});

req.on('error', function(err) {
    console.log(`problem with request: ${err.message}`);
});
