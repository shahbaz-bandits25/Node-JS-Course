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
async function getData(){
    //connect method to connect to the server
    let result = await client.connect();

    //telling it which db we want to use.
    let db = result.db(myDatabaseName);

    //telling it which collection we want to use in the DB.
    let collection = db.collection('products');

// here we want all records from the collection so we used find method 
//toArray basically structures the fetched data

    let response = await collection.find({}).toArray();

    console.log(response)
}


getData();

