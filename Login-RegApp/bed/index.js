const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://divya:divya123@cluster0.noden2h.mongodb.net/");

const registerRoutes = require("./modules/registerRoutes");
const loginRoutes = require("./modules/loginRoutes");
const userRoutes = require("./modules/userRoutes");
const blogRoutes = require("./modules/blogRoutes")

app.use(registerRoutes);
app.use(loginRoutes);
app.use(userRoutes);
app.use(blogRoutes);

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("Welcome to the Server Side")
})

app.listen(PORT,()=>console.log(`Server is running on Port: ${PORT}`))