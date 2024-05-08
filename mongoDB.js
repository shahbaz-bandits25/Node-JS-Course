//In this file we'll create our connection function with mongoDB and we'll use this function 
//anywhere where we need to interact with mongoDB

//In this lecture we'll learn how to make the connection with the mongoDB and 
//fetch the data from Database's collection

const {MongoClient} = require('mongodb');

//our local db url or if you're using a db which is on server then you can add that server's url.
const url ='mongodb://localhost:27017';

const myDatabaseName = 'e-comm-practice-db';

//we named it client because here node js is our client and our server for now is MongoDB
//so we're keeping our data on client that's why we named it client.
const client = new MongoClient(url);



//we need to make this function async becuase here client.connect() returns a promise.
async function dbConnect(){
    //connect method to connect to the server
    let result = await client.connect();

    //telling it which db we want to use.
    let db = result.db(myDatabaseName);

    //telling it which collection we want to use in the DB.
    //here it return me the products collection from our e-comm db
    return db.collection('products');


}


//here we'll not use () with the function name because we're not calling it here
//we're exporting it.
module.exports=dbConnect;