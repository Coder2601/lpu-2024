const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/validationRoutes");

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

const db = mongoose.connect("mongodb+srv://divya:divya11@cluster0.noden2h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use('/socialMedia/user',userRoutes);
app.use('/socialMedia/authToken', authRoutes);

app.listen(PORT,()=>console.log(`Sever is running at port: ${PORT}`))