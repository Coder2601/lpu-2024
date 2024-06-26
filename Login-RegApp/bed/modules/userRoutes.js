const express = require("express");
const userRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRoutes.get('/readUsers',(req,res)=>{
    let authHeader = req.headers.authorization

    console.log(authHeader);

    let token = authHeader && authHeader.split(" ")[1];

    try {
        let result = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
        
        res.json(result);

    } catch (error) {
        res.json({msg:error})
    }

})

userRoutes.get('/newToken',(req,res)=>{
    let authHeaders = req.headers.authorization;

    let refToken = authHeaders && authHeaders.split(" ")[1];

    try {
        let result = jwt.verify(refToken, process.env.REFRESH_SECRET_KEY)
        let newAccessToken = jwt.sign({id:result.id},process.env.ACCESS_SECRET_KEY,{expiresIn:'1m'});
        res.json({...result, accessToken:newAccessToken})
    } 
    catch (error) {
        res.json({msg:error})
    }
})

module.exports = userRoutes;