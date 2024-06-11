const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/userModules")

//importing express

const PORT = 5000;

const server = express();
server.use(express.json());
server.use(cors());

server.use('/allUserData',userRoutes);


server.get('/',(req,res)=>{ 
    res.send("Welcome to LPU")
})


server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));