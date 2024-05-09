//In this video we'll learn how to insert single and multiple records in our db's collection

const dbConnect = require('./mongoDB');

const insert = async()=>{
    const db = await dbConnect();
    //To insert A single record
    
    // const result = await db.insertOne(
    //     {name:"A 51",brand:"OPPO",Price:27500,category:"Mobile"}
    // );

    // if(result.acknowledged){
    //     console.log("Record Inserted Successfuly!!");
    // }

    //To insert  multiple records
    const result = await db.insertMany(
        [
        {name:"A 50",brand:"Samsung",Price:47000,category:"Mobile"},
        {name:"A 52",brand:"Samsung",Price:52000,category:"Mobile"},
        {name:"A 54",brand:"Samsung",Price:60500,category:"Mobile"},
        ]
    );

    if(result.acknowledged){
        console.log("Record Inserted Successfuly!!");
    }
}


insert();