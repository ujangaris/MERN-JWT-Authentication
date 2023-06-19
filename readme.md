# MERN Authentication With JWT ,Redux Toolkit and more...

## install tools

    Todo :
    1.  npm install express dotenv mongoose bcryptjs jsonwebtoken cookie-parser

## Setup server | Script & nodemon

    Todo :
    1.  npm install -D nodemon
    2.  package.json
        - tambahkan type module
        - setup script untuk menjalankan server
        - pasang nodemon
    3.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000

## Env file setup

    Todo :
    1.  .env
        - pada directori root buat file .env
        - isi dengan :
            NODE_ENV=development
            PORT=8000
    2.  server.js
        - import dan pasang dotenv
    3.  .gitignore
        - daftarkan file .env agar tidak terpush ke github
    4.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000

## User Routes & Controller Setup

    Todo :
    1.  backend/conrollers/userController.js
        - setup userController
    2.  backend/routes/userRoutes.js
        - import dan pasang express
        - import dan pasang userController
        - buat endpoint auth
    3.  server.js
        - import dan pasang userRoutes
        - buat endpoint default untuk epi
    4.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000

## Async handlers & Custom error middleware

    Todo :
    1.  install asycn handler
        - npm install express-async-handler
    2.  backend/middleware/errorMiddleware.js
        - buat function not found
        - buat function error handler
    3.  server.js
        - import dan pasang notFound & errorHandler
    4.  userController.js
        - import dan asynHandler
        - pasang status code dan error
    5.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000
        - pada postman:
            http://localhost:5000/api/users/auth
            atau {{ baseUrl/api/users/auth }}
        - pada postman akan ada keterangan error
          seperti yang kita buat pada userController.js
            "message": "Something went wrong",
            "stack": "Error: Something went wrong

## User Controller Functions

    Todo :
    1.  backend/controller/userController.js
        - buat dan export registerUser
        - buat dan export logoutUser
        - buat dan export getUserProfile
        - buat dan export updateUserProfile
    2.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000

## Connect To User Routes

    Todo :
    1.  backend/routes/userRoutes.js
        - import dan pasang registerUser sebagai entpoint
        - import dan pasang logoutUser sebagai entpoint
        - import dan pasang  getUserProfile sebagai entpoint
        - import dan pasang  updateUserProfile sebagai entpoint
    2.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000
    3.  pada postman
        - Login User :POST {{baseURL}}/users/auth
        - Register User :POST {{baseURL}}/users
        - Logout User :POST {{baseURL}}/users/logout
        - Get User Profile  :GET {{baseURL}}/users/profile
        - Update User Profile  :PUT {{baseURL}}/users/profile

## MongoDB Database Setup

    Todo :
    1.  .env
        - MONGO_URI=mongodb+srv://ujangaja:<password>@mernauth.junhttb.mongodb.net/mernauth?retryWrites=true&w=majority
        - ganti password dengan password yanga terdaftar pada mongodb atlas
    2.  backend/config/db.js
        - setup connection database mongodb
        - MONGO_URI adalah connection yang kita pasang pada file.env
    3.  server.js
        - import dan pasang connectDB alias dari db.js
    4.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net

## User Model

    Todo :
    1.  backend/models/userModel.js
        - buat schema database untuk user
    2.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net

## Register User Endpoint

    Todo :
    1.  serve.js
        - add express.json
        - add express.urlencoded
    2.  backend/controller/userController.js
        - Destrukturisasi req.body untuk mendapatkan nilai name, email,
          dan password dari permintaan POST yang dikirim oleh pengguna.
        - mencari user exists berdasarkan email
        - jika user dengan email sudah terdaftar akan ada pesan User already exists
        - jika user dengan email tidak ditemukan maka buat data baru
        - jika pembuatan user baru berhasil kirim response  (200 ok) dengan isi id, namedan email
        - jika gagal kirim response badrequest : Invalid user data
    3.  backend/models/userModel.js
        - import dan pasang bcryptjs
        - middleware userSchema sebelum menyimpan data ke database
        - cek apakah password telah dimodifikasi
    4.  pengujian:
        - jalankan server : npm run dev
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net
    5.  pengujian pada postman
        - Register User : POST {{baseURL}}/users
        - body -> x-www-form-url-encoded
            name: john doe
            email: john@gmail.com
            password:<password>
        - send data , kemudian akan ada response :
            {
                "_id": "649032584791100eb448eb2f",
                "name": "john doe",
                "email": "john@gmail.com"
            }
        - cek juga pada mongodb compas/atlas apakah ada data yang berhasil terbuat
