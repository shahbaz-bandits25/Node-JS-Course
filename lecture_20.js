//Lecture 20
//In this lecture we've learned how to return HTML,Json data in response and how link pages


const express = require('express');

const app = express();


app.get('',(req,resp)=>{
   
    //this is how we can link the pages when we click on the link it'll take us to that link
    // <a href='/about-us'> About us </a>

    let name = req.query.user_name
    resp.send(`
    <h1>Welcome ${name} to our HomePage</h1>
    <a href='/about-us'> About us </a>
    <br></br>
    <a href='/help'> Help </a>
    <br></br>
    <a href='/users'> All Users </a>
    `);
});

app.get('/about-us',(req,resp)=>{
    resp.send("This is the About Us page");
});


app.get('/help',(req,resp)=>{
    //this is how you can return a html  in your response
    resp.send(`
    <h2>This is the Help page</h2>
    <input type="text" placeholder="Topic for help"/>
    <button >Help!</button>
    `);
    
});


app.get('/users',(req,resp)=>{
    //this is how you can return json data in array 
    //without array you can return it without [] brackets
    resp.send([
        {
        name:"Shahbaz Ali",
        email:'shahbaz@cinqtech.com'
        },
        {
            name:"Haris",
            email:'haris@cinqtech.com'
        },
]);
});

app.listen(4500);