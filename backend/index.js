const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/userModules");
const encRoutes = require("./modules/hashingPwd");
const loginRoutes = require("./modules/signup-login")

//importing express

const PORT = 5000;

const server = express();
server.use(express.json());
server.use(cors());

server.use('/allUserData',userRoutes);
server.use('/enc',encRoutes);
server.use('/vloggers',loginRoutes);

server.get('/',(req,res)=>{ 
    res.send("Welcome to LPU")
})


server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));