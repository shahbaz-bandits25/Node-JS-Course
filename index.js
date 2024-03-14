//In this lecture we've created a basic server which returns the basic output
//In Node js the http module handles the request and response of the server.


const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>Shahbaz Ali</h1>");
resp.write("<p>Hello from the first server of Node Js</p>");
resp.write("<p>Created By: Shahbaz Ali</p>");
resp.end();
}).listen(4500);