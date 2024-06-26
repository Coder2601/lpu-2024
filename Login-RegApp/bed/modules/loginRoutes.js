const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
let allUsers = require("../sampleData/users")

const loginRoutes = express.Router();


const generateAccessToken=(payload)=>{
    let token = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {expiresIn:'1m'});
    return token;
}



loginRoutes.post('/login',async(req,res)=>{
    let user = req.body;
    let data = allUsers.users

    let result = data.filter(item=>item.id == user.id);
    console.log(result.length);
    
    if(result.length <= 0){
        res.json({msg:"Invalid User"})
    }
    else{
        let response = await bcrypt.compare(user.password, result[0].password);

        if(response){
            let accessToken = generateAccessToken(user);
            let refreshToken = jwt.sign(user,process.env.REFRESH_SECRET_KEY)
            user.accessToken = accessToken;
            user.refreshToken = refreshToken;

            res.json({msg:"Login Success", userData:user})
        }else{
            res.json({msg:"Incorrect Password"})
        }
    }
})

module.exports = loginRoutes;