const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
const userRoutes = express.Router();
require("dotenv").config();

const generateAccessToken = (user)=>{
    return jwt.sign(user, process.env.ACCESS_SECRET_KEY, {expiresIn:'1h'})
}


userRoutes.post('/register', async (req, res) => {
    // console.log(req.body);

    let rawPass = req.body.password;

    encPass = await bcrypt.hash(rawPass, 10);
    let user = new  userModel({...req.body, password: encPass});
    await user.save();

    res.json({msg:"Registration Successful", status: true})
})

userRoutes.post('/login', async(req, res) => {
    let data = req.body;
    // console.log(data);
    let userData = await userModel.find({user_name:data.username})
    console.log(userData);

    if(userData.length <= 0){
        res.json({msg:"user doesn't exist or the credentials are wrong.", status: false})
    }
    else{
        let user = userData[0];
        let result = await bcrypt.compare(data.password,user.password);

        if(result){
            let access_token = generateAccessToken(user.toJSON());
            res.json({msg:"Login Success", status:true, token: access_token})
        }else{
            res.json({msg:"Login Failed, Wrong Credentials", status:false})
        }
    }
})


module.exports = userRoutes;