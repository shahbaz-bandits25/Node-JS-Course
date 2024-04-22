//In this lecture we'll learn how run a loop in ejs 
//means if we've an array in our dynamic data then how we can loop on it in our ejs file

const express = require('express');
const path = require('path');


const app = express();

//here we'll tell node that we're using engine and name of useing engine
app.set('view engine','ejs');

//It's a user profile page in which we send data to the page to be render 
app.get('/profile',(req,resp)=>{
    //here sendFile is a method to send afile in response
    
    let user ={
        name:'Shahbaz Ali',
        city: 'Karachi',
        email:'shahbaz@cinqtech.com',
        skills:['Python','JavaScript','TypeScript','Solidity']
    }
    //we'll send user object to our profile page like below
    resp.render('user_profile',{user});
});

//to go on login page means this is a login route
app.get('/login',(req,resp)=>{
    resp.render('login')
});


app.listen(4500);