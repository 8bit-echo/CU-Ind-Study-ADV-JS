/* jshint esversion: 6 */
const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

    if (request.method === "GET") {

        response.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(response);
    } else if (request.method === "POST") {
        var body = "";
        request.on("data", function(chunk){
            body += chunk;
        });
        request.on('end', function() {

            response.writeHead(200, {"Content-type": "text/html"});
            response.end(`
                <!doctype html>
                <html>
                    <head>
                        <title> Form Results</title>
                    </head>
                    <body>
                        <h1> Your Form Results </h1>
                        <p>
                            ${body}
                        </p>
                    </body>
                </html>
            `);
        });
    }

}).listen(3000);

console.log("Server listening on port 3000...");
