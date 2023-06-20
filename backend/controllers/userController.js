import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth user/set token
// route  POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' })
})
// @desc  Register a new user
// route  POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  // console.log(req.body)
  // Destrukturisasi req.body untuk mendapatkan nilai name, email, dan password dari permintaan POST yang dikirim oleh pengguna.
  const { name, email, password } = req.body
  // console.log(name)
  // mencari user exists berdasarkan email
  const userExists = await User.findOne({ email })
  // jika user dengan email sudah terdaftar akan ada pesan User already exists
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  // jika user dengan email tidak ditemukan maka buat data baru
  const user = await User.create({
    name,
    email,
    password,
  })
  // jika pembuatan user baru berhasil kirim response  (200 ok) dengan isi id, namedan email
  if (user) {
    generateToken(res, user._id)
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    // jika gagal kirim response badrequest : Invalid user data
    res.status(400)
    throw new Error('Invalid user data')
  }
  // res.status(200).json({ message: 'Register User' })
})
// @desc  Logout user
// route  POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' })
})
// @desc  GET user profile
// route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile' })
})
// @desc  Update user profile
// route  PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' })
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }
