//In this lecture w'll learn how to create a route level middleware
//As well as we'll keep our middleware code in separate file and we'll use it here
//Also we learn how to apply the middleware on each route one by one
//And how to apply the middleware on specific group of routes directly not going one by one

const express= require('express');
const app = express();

const reqFilter = require('./middleware');

//For applying middleware on group of routes we need to create a route instance
const route = express.Router();

//now we'll tell the router's instance to use our middleware
route.use(reqFilter);

//let's say if we apply the middleware on homepage,and teacher page one by one each 
//we just put the middleware name just after the route name see below

//basic level home page route
//this is how we can apply route level middleware on each route one by one
app.get('',reqFilter,(req,resp)=>{
    resp.send('Welcome to HomePage!!!!');
});

//basic level teachers page route
app.get('/teachers',reqFilter,(req,resp)=>{
    resp.send('Welcome to TeachersPage!!!!');
});

//but let's say if we've 100 routes and we've to apply the route level middleware on 35 routes so 
//we'll not apply the middleware on those 35 routes one by one
//we'll directly apply the middleware on those 35 routes by 2 or 3 lines of code

//Example of applying middleware on group of routes is below
//we'll apply middleware students,contact and staff page by grouping not one by one
//In order to apply middleware on gropu of routes we just change app.get to route.get
//we just need to replace the app with our router's instance name

//basic level students page route
route.get('/students',(req,resp)=>{
    resp.send('Welcome to StudentsPage!!!!');
});

//basic level contact page route
route.get('/contact',(req,resp)=>{
    resp.send('Welcome to ContactPage!!!!');
});


//basic level staff page route
route.get('/staff',(req,resp)=>{
    resp.send('Welcome to StaffPage!!!!');
});


//For applying middleware on group of routes
app.use('/',route);

app.listen(4500);