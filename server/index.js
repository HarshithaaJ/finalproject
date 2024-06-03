const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./Routes/auth');
const quizRoutes = require('./Routes/quiz');

const app = express();
app.use(cors());
app.use(express.json());

const HOST= process.env.HOST||"localhost";
const PORT=process.env.PORT||7000;
mongoose.connect(process.env.MONGODB_URI)
.then(() =>console.log("Connected to DB"))
.catch(()=>console.log(" failed Connected to DB"))

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/quiz', quizRoutes);

app.get('/',(req,res)=>{
  console.log("server call api call");
  res.json({
      service:"Api call", 
      active:true, 
      time:new Date})
})

app.listen(PORT,()=>{
  console.log(`server is running ,http:${HOST}:${PORT} `);
})