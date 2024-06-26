const express = require("express");
const authRoute = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

authRoute.get('/validateToken', (req,res)=>{
    let authHeaders = req.headers.authorization;

    let token = authHeaders && authHeaders.split(" ")[1];

    console.log(token);

    let result = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
    console.log(result);

    res.json({msg:"Validating Token"})

})

module.exports = authRoute;