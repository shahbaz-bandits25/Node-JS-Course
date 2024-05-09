const dbConnect = require('./mongoDB');


//we can handle the promise of return by dbConnect with promises of js or with async await it's upto on us
//but prefer async await because it's modern JS syntax


//JS Promise Approach
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// });

//async Await Approach
const main = async()=>{
    let resp = await dbConnect();
    //this is how you can get all records

    // let data = await resp.find().toArray();


    //This is how you can find records as per your desired params
    //let's say we wanna find those whoose brand is samsung
    let data = await resp.find({brand:"Realme"}).toArray();
    console.warn(data);
}

main();