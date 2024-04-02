//In this code we've created a basic API for static data no connection with DB
const http = require('http');

//here we're importing the data from our my_dummy_data.js file
const data = require('./my_dummy_data')

// http.createServer((req,resp) =>
// {
//     //this is response's header in it we written the status code of API,and data type of we're sending
//     //here we can any status code that what our need like 404,500 etc
//     resp.writeHead(200,{'Content-Type':'application\json'});

//     //this is respone's body in it we'll write our response data what we wanna send in response
//     resp.write(JSON.stringify({name:'Shahbaz Ali',email:'shahbaz@cinqtech.com'}));

//     //this line will send data in response from our file means the data we've imported from our file
//     //  we'll send it in response
//     resp.write(JSON.stringify(data));
//     //it'll end the response
//     resp.end();
// }).listen(4500);