//in this lecture we'll create basic API in which we fetch data from our DB

const express = require('express');
const dbConnect = require('./mongoDB');
const app = express();


//now we're creating a basic level get API which gets data from our DB

app.get('/products', async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)

});

app.listen(5000);