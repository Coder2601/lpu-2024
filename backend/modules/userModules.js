const express = require("express");
const userData = require("./sampleData");
const userRoutes = express.Router();

userRoutes.get('/users',(req,res)=>{ 
    res.json({data:userData});
})

userRoutes.post('/createUser',(req,res)=>{
    let newUser = req.body;
    let lastUserId = userData[userData.length-1].id;
    newUser.id = lastUserId + 1;
    userData.push(newUser)

    // userData.user4 = newUser
    res.json(userData);
})

userRoutes.put('/updateUser/:id',(req,res)=>{
    // console.log(req.params);
    // console.log(req.body);

    let id = req.params.id;

    userData.map((element)=>{
        if (element.id==id){
            element.name = req.body.name;
        }
    })
    
    res.json(userData)
})

userRoutes.delete('/deleteUser/:id',(req,res)=>{
    let userId = req.params.id;
    let x = userData.filter(item=>item.id != userId)
    res.json(x);
})



module.exports = userRoutes