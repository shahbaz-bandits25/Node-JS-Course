const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname,'public');

const app = express();

app.use(express.static(publicPath));

//now how we can access the about page we need to add about.html in request like below
//http://localhost:4500/about.html
//if we directly open it http://localhost:4500 it'll give an error and you say it should redirect to home page
//for it we need create an empty file of index.html then it'll not give an error

app.listen(4500);