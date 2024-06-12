const express = require("express");
const bcrypt = require("bcrypt");
const encRoutes = express.Router();

const saltRounds = 10;

let pass = "Hello";
let encPass = "$2b$10$onK7NPg3x36.aWdtkOnI4uUIlm9KgykVOgMKZFQRklAs/0s2esAqG"

encRoutes.get("/signup",async(req,res)=>{
    let hashedPwd = await bcrypt.hash(pass,saltRounds);
    res.json({actualPass:pass,encPass: hashedPwd})
})

encRoutes.post('/login',async(req,res)=>{
    let pwd = req.body.pass;
    let response = await bcrypt.compare(pwd,encPass);
    
    res.json({match:response});
})


module.exports = encRoutes;