const express = require("express");
const bcrypt = require("bcrypt");
const encRoutes = express.Router();

const saltRounds = 10;

let pass = "Hello";

encRoutes.get("/signup",async(req,res)=>{
    let hashedPwd = await bcrypt.hash(pass,saltRounds);
    res.json({actualPass:pass,encPass: hashedPwd})
})


module.exports = encRoutes;