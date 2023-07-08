import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddlewaare.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// endpoint default untuk epi
app.use('/api/users', userRoutes)

//kondisi ketika server berada dalam production
if (process.env.NODE_ENV === 'production') {
  // mendapatkan direktori awal aplikasi
  const __dirname = path.resolve()
  // middleware untuk menyajikan file2 static seperti css, javascript, gambar ,dll
  app.use(express.static(path.join(__dirname, 'frontend/dist')))
  // menangani semua permintaan yang tidak cocok, diarahkan ke file index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  )
} else {
  app.get('/', (req, res) => res.send('Server is ready...'))
}

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server stared on port ${port}`)
})

// - **POST /api/users** - Register a user
// - **POST /api/users/auth** - Authenticate a user and get token
// - **POST /api/users/logout** - Logout user and clear cookies
// - **GET /api/users/profile** - Get user profile
// - **PUT /api/users/profile** - Update profile
