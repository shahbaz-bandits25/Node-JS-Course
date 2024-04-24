//In this lecture we learned what are middlewares and 
//In this program we'll create a middlware in this same file and we use that middleware on our routes in 
//this program.

const express= require('express');
const app = express();


//Here we create a middleware which checks that age parameter is entered in the request or not
//If not entered it'll not allow to acces both routes
//If entered it checks if less than 18 it'll send it's response not allow to go on both routes.
//If entered age is greater than 18 then it'll allow to move on both routes.

app.use((req,resp,next)=>{

    if(!req.query.age){
        //if age is not entrered then it'll not allow to move on any routes
        resp.send("Please enter your age");

    }
    else if(req.query.age <18){
        //if age is  entrered and less than 18 then it'll not allow to move on any routes
        resp.send("You are below 18");

    }
    else{
        //next is a function which allows to move on the routes.
        //If we don't add next function the page is always stuck on loading and will not move any route
        next();
    }

});

//basic level home page route
app.get('',(req,resp)=>{
    resp.send('Welcome to HomePage!!!!');
});

//basic level users page route
app.get('/users',(req,resp)=>{
    resp.send('Welcome to UsersPage!!!!');
});

app.listen(4500);