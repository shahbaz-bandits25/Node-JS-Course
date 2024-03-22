const { warn } = require('console');
const fs = require('fs')

//It's node js builtin module which gives us the path of the directory
const path = require('path')

//here we're getting the path of the Files named folder 
//__dirname is gives us current directory path 
//path.join(__dirname,'Files') give us the path of the Files named folder
const dirPath = path.join(__dirname,'Files');


//Here we're creating the files in loop
// for(let i=1; i<=5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,`This is file number${i}`);
// }


//here we're reading the directory means which files are present in our given directory
fs.readdir(dirPath,(err,files)=>{
    files.forEach((file)=>{
        console.log(file)
    })
})