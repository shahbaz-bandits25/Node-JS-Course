const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD_WITH_Files');
const file_path = `${dirPath}/crud_file_test.txt`;


//used to create the file
fs.writeFileSync(file_path,"This is a file for test CRUD using file");


//used to read the file
fs.readFile(file_path,"utf8",(err,data)=>{
    console.log('File Data =>',data)
});


// //used to update the content of the file
fs.appendFile(file_path,',and this file has been updated',(err)=>{
    if(!err){
        console.log('File is updated')
    }
    else{
        console.log('File is not updated')
    }
});



//used to rename the file
fs.rename(file_path,`${dirPath}/orange.txt`,(err)=>{
    if(!err){
        console.log('File is renamed')
    }
    else{
        console.log('File is not renamed')
    }
});



//used to delete the file
// fs.unlinkSync(`${dirPath}/orange.txt`,(err)=>{
//     if(!err){
//         console.log('File is deleted')
//     }
//     else{
//         console.log('File is not deleted')
//     }
// });