//in this lecture we'll learn how to create Schemas,Models by using mongoose

//We've create a basic post api with mongoose on Static data 
const mongoose = require('mongoose');


const main = async ()=>{
    //that's how we can make connection with our db in mongoose 
    await mongoose.connect('mongodb://localhost:27017/e-comm-practice-db');

    //here in schema we define fields and their types 
    //if we enter any other field which is not defined in Schema then it'll not be added in DB.
    //By schema we add the validations like in numeric field we can add string value
    const ProductSchema = mongoose.Schema({
        name:String,
        Price: Number
    });

    //here we're creating our Model
    //first param is the collection name of our DB.
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"Nokia 5221",Price:17500});
    data = await data.save();
    console.log(data)

}


main();