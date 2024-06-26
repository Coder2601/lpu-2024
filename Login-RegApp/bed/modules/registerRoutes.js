const express = require("express");
const registerRoutes = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/userModel");


/*   ____________MIDDLEWARES EXAMPLE__________
function m1(req,res,next){
    console.log("Middleware 1 Executed",req.body);

    req.body={...req.body, name:"Arshi"}
+
    next();
}

function m2(req,res,next){
    console.log("Middleware 2 Executed",req.body);
    next();
}

registerRoutes.get('/middles',m1,m2,(req,res)=>{
    res.send("Last Callback is Executed")
})

*/


const encryptPass = async (req,res,next)=>{
    let rawPass = req.body.password;

    let encPass = await bcrypt.hash(rawPass,10);
    req.body = {...req.body, encPass: encPass};
    next();
}

// registerRoutes.post('/register',encryptPass,(req,res)=>{
//     let data = req.body;
//     let resData={};

//     resData.name = data.first_name + " " + data.last_name;
//     resData.address = `${data.city}, ${data.state}, (${data.pincode})`;
//     resData.class = `${data.stream} ${data.semester} Semester`;
//     resData.college = data.college;
//     resData.password = data.encPass;

//     res.json(resData);
// })

registerRoutes.post('/register',encryptPass,async(req,res)=>{
    let data = {...req.body}

    let userModel = new user({...data});
    
    await userModel.save();

    res.json({msg:"Registration Successful"});

})


module.exports = registerRoutes;