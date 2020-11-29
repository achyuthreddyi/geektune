import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
},{
  timestamps: true
})

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  songUrl:{
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,        
  },
  reviews: [reviewSchema],
  description:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true,
    default: 0
  },
  numReviews:{
    type: Number,
    required: true,
    default: 0
  },
 
}, {timestamps: true})

const Song = mongoose.model('Song', songSchema)
export default Song