const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const blogs = require("./blogsData");

let refreshTokens=[];



let user={
    id:101,
    name:"Jaydeep",
    password:"Hello",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJuYW1lIjoiSmF5ZGVlcCIsInBhc3N3b3JkIjoiSGVsbG8iLCJpYXQiOjE3MTgyNTkxNDR9.5phiBrqiHkOCUyNmKfic4ZrL7KAwWdrH64MlLiQ0INw"
}

authRoutes.post('/login',(req,res)=>{
    let user = req.body;

    let accessToken = generateAccessToken(user);
    let refreshToken =  jwt.sign(user,process.env.REFRESH_SECRET_KEY,{expiresIn:'1d'})
    refreshTokens.push(refreshToken);
    

    res.json({
        user:user,
        access_token: accessToken, 
        refresh_token:refreshToken
    })
})

authRoutes.post('/blogs/:id',(req,res)=>{
    let token = req.body.token;
    try{
        let results = jwt.verify(token, process.env.SECURITY_KEY)
        res.send({msg:results})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})


function generateAccessToken(user){
    // "process.env" allows to access the values inside ".env" file
    return jwt.sign(user,process.env.SECURITY_KEY,{expiresIn:'1m'})
}

module.exports = authRoutes;