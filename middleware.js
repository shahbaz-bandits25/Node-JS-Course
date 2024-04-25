 module.exports = reqFilter=(req,resp,next)=>{

    if(!req.query.age){
        //if age is not entrered then it'll not allow to move on any routes
        resp.send("Please enter your age");

    }
    else if(req.query.age <18){
        //if age is  entrered and less than 18 then it'll not allow to move on any routes
        resp.send("You are below 18");

    }
    else{
       next();
    }

}