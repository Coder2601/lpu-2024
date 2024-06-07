const express = require("express");
//importing express

const PORT = 5000;

const server = express();
server.use(express.json());

let userData = [
    {
        id:101,
        name: " Arsh",
        age:"23"
    },
    {
        id:102,
        name:"Hardik",
        age:"12"
    },
    {
        id:103,
        name:"Harsh",
        age:"89"
    }
]

// Arsh, Hardik, Harhs

server.get('/',(req,res)=>{ 
    res.send("Welcome to LPU")
})

server.get('/users',(req,res)=>{ 
    res.send(userData);
})

server.post('/createUser',(req,res)=>{
    let newUser = req.body;
    let lastUserId = userData[userData.length-1].id;
    newUser.id = lastUserId + 1;
    userData.push(newUser)

    // userData.user4 = newUser
    res.send(userData);
})


server.put('/updateUser/:id',(req,res)=>{
    // console.log(req.params.no);
    // console.log(req.body);

    let id = req.params.id;

    let x = userData.filter((element)=>element.id==id)

    res.send(x)
})

server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));