import express from 'express'
import { authUser } from '../controllers/userController.js'

const router = express.Router()
// endpoint auth
router.post('/auth', authUser)

export default router
