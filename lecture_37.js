//in this lecture we'll create basic API in which we update data in our DB

const express = require('express');
const dbConnect = require('./mongoDB');
const app = express();


app.use(express.json());


//now we're creating a basic level PUT API which insert data in our DB

//by this way we can update the data hardcodedly
// app.put('/',async(req,resp)=>{
//     let data = await dbConnect();
//     data = await data.updateOne(
//         {name:"NOKIA 3310"},
//         {$set:{Price:5950}}
//     );
    
//     resp.send(data)

// });


//by this way we can update the data with the data in request
// app.put('/',async(req,resp)=>{
//     let data = await dbConnect();
//     data = await data.updateOne(
//         {name:"NOKIA 3310"},
//         {$set:req.body}
//     );
    
//     resp.send(data)

// });

//In above both cases we're matching the item which we wanna update taking it hardcodely
//now we'll take it from request body


// //by this way we can update the data with the data in request
// app.put('/',async(req,resp)=>{
//     let data = await dbConnect();
//     data = await data.updateOne(
//         {name:req.body.name},
//         {$set:req.body}
//     );
    
//     resp.send(data)

// });

//now we'll get which item we wanna update from request's parameters

//by this way we can update the data with the data in request
app.put('/:name',async(req,resp)=>{
    let data = await dbConnect();
    data = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    
    resp.send(data)

});
app.listen(5000);


