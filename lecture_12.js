//In this video we'll learn how to take the file name and it's content text as input from command line

//importing the file module of node js
const fs = require('fs')

//saving the user from entering from cmd in input named variable
const input = process.argv;

//Now creating the file with name entered by user in cmd and it's content writing in the file which is inputted too

//input[0] and input[1] contains our node.js path and our current  file path respectively by default
//because process.argv[0] and process.argv[1] contians our node.js path and our current  file path respectively by default

//so that's why our useable input starts from 2
//input[2] contains our user inputtted file name which is apple.txt
//input[3] contains the text which is in body of file and it's "This is a fruit"

fs.writeFileSync(input[2],input[3])


//Now we'll create little complex program 
//we take user choice either he wanna create or remove the file 

//if user create a new file with some text will enter add filename filetext 
// like this add orange.txt "This is a fruit and color"
if(input[2]==='add'){
    console.warn('here')
fs.writeFileSync(input[3],input[4])
}
else if(input[2]==='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid Choice");
}