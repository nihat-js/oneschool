const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const port = 8080 || process.env.PORT
const userRouter = require('./routers/userRouter')
app.use(express.json())
app.use(cors())

app.use('/users',userRouter)



mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URI,(err) =>{
  if (err){
    throw err
  }
  console.log('connected to database')
})


app.listen(port, function(err) {
  if (err){
    throw err
  }
    console.log('listening on ')
})