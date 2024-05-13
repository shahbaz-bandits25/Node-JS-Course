//In this video we'll learn how to delete
const dbConnect = require("./mongoDB")


const deleteData = async ()=>{
    console.warn('call');
    const db = await dbConnect();
// 
    //To update a single record
    // const data = await db.deleteOne(
    //     //here we find which record we want to delete 
    //     //we can find it with any attribute of our record in collection
    //     {name:'A20'}
    // );
    // if(data.acknowledged){
    
    //     console.log("record deleted successfuly!!");
    // }

       //To update multiple records
       const data = await db.deleteMany(
    //     //here we find which record we want to delete 
    //     //we can find it with any attribute of our record in collection
    //     //for Example we to delete All records whose name is A 51 belong from whichever brand we 
    
        {name:'A 51'}
    
    );
    // console.warn(data);
    if(data.acknowledged){
    //     console.warn(data);
    
        console.log("record deleted successfuly!!");
    }
}

deleteData();