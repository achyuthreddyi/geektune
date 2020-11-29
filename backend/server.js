import express from 'express'
import dotenv from 'dotenv'

const app = express()



app.get('/',(req, res) =>{
  res.send('from the newly created app')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server is running in ${PORT}`)
)