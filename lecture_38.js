//in this lecture we'll create basic API in which we delete data in our DB

const express = require('express');
const dbConnect = require('./mongoDB');
const mongo = require('mongodb')
const app = express();


app.use(express.json());


//now we're creating a basic level DELETE API which insert data in our DB
// //if we want to delete data by name and taking name from request's params
// app.delete('/:name',async(req,resp)=>{
//     let data = await dbConnect();
//     data = await data.deleteOne({name:req.params.name});

//     resp.send(data);
// });

//if we want to delete data by id of  and taking id from request's params

//we convert the id coming from params into the mongo's objectID
app.delete('/:id',async(req,resp)=>{
    let data = await dbConnect();
    //below we're converting the id coing from params of request into the mongo's object id
    data = await data.deleteOne({_id: new mongo.ObjectId(req.params.id)});

    resp.send(data);
});

app.listen(5000);
