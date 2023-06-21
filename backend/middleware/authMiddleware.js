import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from './../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  //   tampung nilai jwt kedalam  token
  token = req.cookies.jwt
  //   ceck token ada  atau tidak
  if (token) {
    // jika token ada akan di eksekusi ke baris ini
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.userId).select('-password') //note -password untuk menghilangkan nilai password dari data yang akan ditampilkan
      next()
    } catch (error) {
      res.status(401)
      //  jika token tidak ada buat response 401 dan pesan token tidak valid
      throw new Error('Not authorized, invalid token')
    }
  } else {
    res.status(401)
    //  jika token tidak ada buat response 401 dan pesan token tidak ada
    throw new Error('Not authorized, no token')
  }
})

export { protect }
