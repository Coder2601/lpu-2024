const express = require("express");
const bcrypt = require("bcrypt");

const loginRoutes = express.Router();
let vloggers = [
    {
      "id": 986,
      "name": "Garima",
      "password": "riya@23",
      "blog": "Cars",
      "title": "BMW",
      "encPass": "$2b$10$9z14d7LYqN/unzWLHW.IzehOCA1bEouzufyAVGAt0WWkKctn8qJAS"
    },
    {
      "id": 502,
      "name": "Jay",
      "password": "fomo@34",
      "blog": "Shoes",
      "title": "Air Jordans",
      "encPass": "$2b$10$n/spE9FDerRyZa/tgYE71.i7.wk99p0JmD36v7c.ygbBNbo6MdXdG"
    }
  ];


const authenticate = async (req,res,next)=>{
    let data = req.body;
    let x = vloggers.filter(item=>item.id==data.id);

    if(x.length != 0 ){
        if(x[0].name == data.name){
            let results = await bcrypt.compare(data.password,x[0].encPass)
        
            if(results){
                req.body = {msg:"Login Successful"};
                next();
            }
            else{
                req.body={msg:"Wrong Password"}
                next();
            }
        }else{
            req.body= {msg:"Enter the correct name"}
            next();
        }

    }else{
        req.body = {msg:"User not found!"}
    }
}

loginRoutes.get('/allVloggers',(req,res)=>{
    res.json({data:vloggers})
})

loginRoutes.post("/signup",async(req,res)=>{
    let vloggerData = req.body;
    let rawPass = vloggerData.password;

    let hashedPwd = await bcrypt.hash(rawPass,10);
    vloggerData.encPass = hashedPwd;

    vloggers.push(vloggerData);

    res.send({user:vloggerData,msg:"Signup Successful"})

})


loginRoutes.post('/login',authenticate,(req,res)=>{
    res.send(req.body)
})


module.exports = loginRoutes;