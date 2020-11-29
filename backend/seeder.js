import users from './data/user.js'
import songs from './data/songs.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import Song from './models/songModel.js'

connectDB()

const importData = async () =>{
  try {
    await Song.deleteMany()
    await User.deleteMany()
    await Song.insertMany(songs)
    await User.insertMany(users)
    console.log('data stored into the database');
    process.exit()

  } catch (error) {
    console.log(`error in uplading the data`);    
  }
}

const destroyData = async () =>{
  try {
    await Song.deleteMany()
    await User.deleteMany()
    console.log('data destroyed in the database successfully');
    
  } catch (error) {
    console.log('error while deleting in the database');    
  }
}

if(process.argv[2] === '-d'){
  destroyData()
}else{
  importData()
}