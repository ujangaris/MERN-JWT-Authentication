import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
const port = process.env.PORT || 5000

const app = express()

// endpoint default untuk epi
app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready...'))
app.listen(port, () => {
  console.log(`Server stared on port ${port}`)
})

// - **POST /api/users** - Register a user
// - **POST /api/users/auth** - Authenticate a user and get token
// - **POST /api/users/logout** - Logout user and clear cookies
// - **GET /api/users/profile** - Get user profile
// - **PUT /api/users/profile** - Update profile
