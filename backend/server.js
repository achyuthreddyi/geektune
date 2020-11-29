import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()
connectDB()

app.get('/',(req, res) =>{
  res.send('from the newly created app')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server is running in ${PORT}`)
)