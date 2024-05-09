//In this video we'll learn how to update one or multiple record in our db using node js

const dbConnect = require("./mongoDB")


const update = async ()=>{
    const db = await dbConnect();

    //To update a single record
    // const data = await db.updateOne(
    //     //here we find which record we want to update 
    //     //we can find it with any attribute of our record in collection
    //     {name:'A20'},
    //     //Here we'll add the field and it's updated value
    //     //let's say we wanna update it's price
    //     {$set: {Price:22300}
    //     }
    
    // );
    // if(data.acknowledged){
    
    //     console.log("record updates successfuly!!");
    // }

       //To update multiple records
       const data = await db.updateMany(
        //here we find which record we want to update 
        //we can find it with any attribute of our record in collection
        //for Example we to update All records whose name is A 51 belong from whichever brand we 
        //we want to make their price 77219.
        {name:'A 51'},
        //Here we'll add the field and it's updated value
        //let's say we wanna update it's price
        {$set: {Price:77219}
        }
    
    );
    if(data.acknowledged){
    
        console.log("record updates successfuly!!");
    }
}

update();