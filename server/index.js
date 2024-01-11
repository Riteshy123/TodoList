require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes')
const Login  = require('./routes/Login')
const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);


app.use("/", router);

app.use("/todo", Login);

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
});