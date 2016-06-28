/**
 * Created by 207493 on 6/28/16.
 */
var fs = require('fs');
var http = require('http');

//404 respnse
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

//Handle a user request
function onRequest(request, response) {
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");