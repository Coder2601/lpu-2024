const express = require("express");
const middlRoutes = express.Router();

const m1=(req,res,next)=>{
    setTimeout(()=>{
        console.log("Hello Ji...");
        req.body={msg:"Hi from m1"}
        next();
    },2000);
    
}

const m2=(req,res,next)=>{
    console.log("Ki Haal Chaal");
    let m1Msg = req.body.msg;
    req.body={
        m1msg:m1Msg,
        m2msg:"It's Party Time!"
    };
    next();
}

middlRoutes.get('/m1',m1,m2,(req,res)=>{
    console.log("Last Middleware got executed");
    res.send({
        m1msg:req.body.m1msg,
        m2msg:req.body.m2msg, 
        msg:"What's the Venue?"
    })
})




module.exports = middlRoutes;