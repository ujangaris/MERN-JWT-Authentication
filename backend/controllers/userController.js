import asyncHandler from 'express-async-handler'
// @desc Auth user/set token
// route  POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  // pasang status code dan error
  res.status(401)
  throw new Error('Something went wrong')
  res.status(200).json({ message: 'Auth User' })
})

export { authUser }
