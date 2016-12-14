/* jshint esversion: 6 */
const http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end(`
            <!doctype html>
            <html>
                <head>
                    <title>NodeJS Server</title>
                <head>
                <body>
                    <h1> Serving HTML </h1>
                    <p>${request.url}</p>
                    <p>${request.method}</p>
                </body>
            </html>
        `);
});

server.listen(3000);
console.log(`Server listening on port 3000...`);
