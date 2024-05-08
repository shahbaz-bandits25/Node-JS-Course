const dbConnect = require('./mongoDB');


//we can handle the promise of return by dbConnect with promises of js or with async await it's upto on us
//but prefer async await because it's modern JS syntax


//JS Promise Approach
dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data);
    })
});

//async Await Approach
const main = async()=>{
    let resp = await dbConnect();
    let data = await resp.find().toArray();
    console.warn(data);
}

main();