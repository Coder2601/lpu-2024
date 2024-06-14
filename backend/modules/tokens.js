const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const blogs = require("./blogsData");

let refreshTokens=["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODU5LCJuYW1lIjoiS2lyYW4iLCJwYXNzd29yZCI6ImFzZGZnIiwiaWF0IjoxNzE4MzM5NzU5LCJleHAiOjE3MTg0MjYxNTl9.JhzZ5a4zsz-cZe6ZQ8LvDO7HfIBAMfW6Izsq63i4ZWs"];



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


authRoutes.post('/newToken/:refToken',(req,res)=>{
    let reftoken = req.params.refToken;

    let results = refreshTokens.includes(reftoken)
    console.log(results);

    try {
        let response = jwt.verify(reftoken,process.env.REFRESH_SECRET_KEY)
        
        console.log(response);

        let newAccessToken = generateAccessToken({id:response.id})
        
        res.status(200).json({msg:"Refresh token is valid",
        accessToken:newAccessToken})

    } catch (error) {
        res.status(400).json({msg:error})
    }

})



authRoutes.post('/blogs',(req,res)=>{
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