import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import cors from 'cors'

//importing the routes
import songRoutes from './routes/songRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.use('/api/songs', songRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server is running in ${PORT}`)
)