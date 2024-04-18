//In this lecture we'll configure a dynamic route or dynamic page by using ejs engine

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
        email:'shahbaz@cinqtech.com'
    }
    //we'll send user object to our profile page like below
    resp.render('profile',{user});
});

app.listen(4500);