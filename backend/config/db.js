import mongoose from 'mongoose'
import colors from 'colors'
const MONGO_URI = 'mongodb+srv://achyuth:achyuth@demo.xlnni.mongodb.net/geektune?retryWrites=true&w=majority'

const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(MONGO_URI,{
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