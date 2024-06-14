const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/userModules");
const encRoutes = require("./modules/hashingPwd");
const loginRoutes = require("./modules/signup-login");
const middlRoutes = require("./modules/middlewares")
const authRoutes = require("./modules/tokens");

//importing express

const PORT = 5000;

const server = express();
server.use(express.json());
server.use(cors());

server.use('/allUserData',userRoutes);
server.use('/enc',encRoutes);
server.use('/vloggers',loginRoutes);
server.use('/middlewares',middlRoutes)
server.use('/auth',authRoutes);


server.get('/',(req,res)=>{ 
    res.send("Welcome to LPU")
})


server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));