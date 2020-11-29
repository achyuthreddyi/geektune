import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log(`mongo db connected:${conn.connection.host}`.cyan.underline);
    
  } catch (error) {
    console.error(`error${error}`);    
  }
}

export default connectDB