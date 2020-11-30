import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const isSignedIn = asyncHandler(async(req, res, next) =>{
  console.log('coming here');
  let token 
  if(req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')){
      try {
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await (await User.findById(decoded.id)).isSelected('-password')
        next()
      } catch (error) {
        res.status(401).json({
          error: 'Not authorized token failed'
        })
        
      }
    }else{
      res.status(401).json({
        error: 'token not found'
      })

    }
})