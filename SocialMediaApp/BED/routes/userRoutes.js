const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel")
const userRoutes = express.Router();

userRoutes.post('/register', async (req, res) => {
    console.log(req.body);

    let rawPass = req.body.password;

    encPass = await bcrypt.hash(rawPass, 10);
    let user = new  userModel({...req.body, password: encPass});
    await user.save();

    res.json({msg:"Registration Successful", status: true})
})

userRoutes.post('/login', (req, res) => {

})


module.exports = userRoutes;