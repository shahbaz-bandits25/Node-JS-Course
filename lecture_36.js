//in this lecture we'll create basic API in which we insert data in our DB

const express = require('express');
const dbConnect = require('./mongoDB');
const app = express();

//When your Express.js server receives an HTTP POST request with a JSON payload,
//express.json() middleware parses the JSON body and exposes it in the req.body property of your request object. 
//This makes it easy to work with JSON data sent by clients.
app.use(express.json());

//now we're creating a basic level POST API which insert data in our DB



app.post('/', async(req,resp)=>{
    let data = await dbConnect();
    data = await data.insertOne(req.body);
    resp.send(data)

});

app.listen(5000);