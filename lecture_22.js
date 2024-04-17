//In previous lecture 21 we rendered a html page as static content but we need to give the extension each
//file in the url path like below
//http://localhost:4500/about.html

//In this lecture we'll learn how to remove the extension from it
//As well as we learned how to create a route if page requested is not found

const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname,'public');

const app = express();

//It's our homepage
app.get('',(req,resp)=>{
    //here sendFile is a method to send afile in response
    resp.sendFile(`${publicPath}/index.html`);
});

//It's our about us
app.get('/about-us',(req,resp)=>{

    resp.sendFile(`${publicPath}/about.html`);
});

//This will redirect to the page 404 not found if the entered route does not match with our created routes
app.get('*',(req,resp)=>{

    resp.sendFile(`${publicPath}/404Page.html`);
});

app.listen(4500);