//In this lecture we'll perform CRUD using Mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm-practice-db');


//Product Schema
const ProductSchema = mongoose.Schema({
    name:String,
    Price: Number,
    brand: String,
    category: String
});


//CREATE OPERATION

const addRecord = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"Nokia 5310",Price:7500,brand:"Nokia",category:"Mobile"});
    data = await data.save();
    console.log(data)
}

//UPDATE OPERATION

const updateRecord = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.updateOne(
        {name:'Nokia 5220'},
        {
            $set:{brand:"Nokia",Price:19586}
        }
    );
    // data = await data.save();
    console.log(data)
}


//DELETE OPERATION

const deleteRecord = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.deleteOne(
        {name:'Nokia 5221'}
    );
    // data = await data.save();
    console.log(data)
}



//READ OPERATION

const getRecord = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.find( {name:'Nokia 5310'});
    // data = await data.save();
    console.log(data)
}

const getAllRecord = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.find();
    // data = await data.save();
    console.log(data)
}
getAllRecord();

// The save method is used to save a new document to the database or update an existing document.
// It is called on a document instance.
// When you create a new instance of a model and use save, it inserts the document into the database.
// When you modify an existing document and use save, it updates the document in the database.
