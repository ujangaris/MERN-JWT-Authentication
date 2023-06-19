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
