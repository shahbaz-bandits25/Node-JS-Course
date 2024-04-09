//In this lecture we've installed express js in our project
//Now we create home,About Us and Help Page

//this is how we import express js
const express = require('express');

//now we need to make the express's variable into executeable function

const app = express();

//Now we'll use the get method of express to send the response
//this is our homepage

//the get method first param is the page route here homepage so empty string is route
//the 2nd param is the callback function which has two params request and response in it we write what we want

app.get('',(req,resp)=>{
    //Lecture 19 mein bas yeh request params get krna seekha ha
    //This is how we can get the request which wev sent to server
    let name = req.query.user_name
    //the send method is use to send the response which we've created
    resp.send(`Welcome ${name} to our HomePage`);
});

//This is our About Us Page
//we neec to add slash before the route name

app.get('/about-us',(req,resp)=>{
    //the send method is use to send the response which we've created
    resp.send("This is the About Us page");
});

//This is our Help Page

app.get('/help',(req,resp)=>{
    //the send method is use to send the response which we've created
    resp.send("This is the Help page");
});

app.listen(4500);