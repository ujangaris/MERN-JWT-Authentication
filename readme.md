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
        - jalankan server : npm run server
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
        - jalankan server : npm run server
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
        - jalankan server : npm run server
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
        - jalankan server : npm run server
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
        - jalankan server : npm run server
        - pada browser http://localhost:5000

## Connect To User Routes

    Todo :
    1.  backend/routes/userRoutes.js
        - import dan pasang registerUser sebagai entpoint
        - import dan pasang logoutUser sebagai entpoint
        - import dan pasang  getUserProfile sebagai entpoint
        - import dan pasang  updateUserProfile sebagai entpoint
    2.  pengujian:
        - jalankan server : npm run server
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
        - jalankan server : npm run server
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net

## User Model

    Todo :
    1.  backend/models/userModel.js
        - buat schema database untuk user
    2.  pengujian:
        - jalankan server : npm run server
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
        - jalankan server : npm run server
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

## Generate JWT & Save Cookie

    Todo :
    1.  backend/utils/generateToken.js
        - setup generateToken
    2.  backend/controller/userController.js
        - import dan pasang generateToken
    4.  pengujian:
        - jalankan server : npm run server
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
        - akan ada cookie yang token tergenrate
        - cek juga pada mongodb compas/atlas apakah ada data yang berhasil terbuat

## Auth User Endpoint

    Todo :
    1.  backend/models/userModel.js
        - bandingkan password yang di input pengguna dan password pada database
    2.  backend/controller/userController.js
        - pada auth user login tambahkan :
         - if statement untuk mengecek apakah password yang diberikan cocok
           dengan password yang telah di-hash sebelumnya
         - buat token autentikasi yang akan digunakan untuk mengakses diotorisasi.
         - kirim response
    3.  pengujian:
        - jalankan server : npm run server
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net
    4.  pengujian pada postman
        - Login User : POST {{baseURL}}/users/auth
        - body -> x-www-form-url-encoded
            email: john@gmail.com
            password:<password>
        - send data , kemudian akan ada response :
            {
                "_id": "649032584791100eb448eb2f",
                "name": "john doe",
                "email": "john@gmail.com"
            }
        - akan ada cookie yang token tergenrate
        - noted: login dengan data yang ada di database.

## Logout & Destroy Cookie

    Todo :
    1.  backend/controller/userController.js
        - hapus cookie : set cookie dengan nilai kosong
    2.  pengujian:
        - jalankan server : npm run server
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net
    3.  pengujian pada postman
        - Logout User : POST {{baseURL}}/users/logout

        - send data , kemudian akan ada response :
            {
                "message": "User logged out"
            }
        - cek juga pada pada button bagian cookies
        - nilai cookie sudah terhapus

## Auth Protect Middleware

    Todo :
    1.  server.js
        - import dan pasang cookie-parser
    2.  backend/middleware/authMiddleware.js
        - buat function protect
        - tampung nilai jwt kedalam  token
        - ceck token ada  atau tidak
        - jika token ada akan di eksekusi ke baris ini
        - jika token tidak ada buat response 401 dan pesan token tidak valid
        - jika token tidak ada buat response 401 dan pesan token tidak ada
    3.  backend/routes/userRoutes.js
        - import dan pasang  authMiddleware dengan nama protect
        - pasang pada getUserProfile & updateUserProfile
    4.  pengujian:
        - jalankan server : npm run server
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net
    5.  pengujian pada postman
        - jika belum login:
            - Get User Profile : POST {{baseURL}}/users/profile

            - send data , kemudian akan ada response :
                {
                    "message": "Not authorized, no token",
                }
            - hal ini terjadi karna user belom login=tidak ada token
        - jika sudah login:
            - lakukan Login User : POST {{baseURL}}/users/auth

            - Get User Profile : POST {{baseURL}}/users/profile

            - send data , kemudian akan ada response :
                {
                    "message": "Get User Profile",
                }
            - hal ini terjadi karna token=cookie terbaca
            - lakukan juga pada update user profile

    6.  backend/controller/userController.js
        - cetak data user yang login
    7.  pengujian pada postman
        - jika sudah login:
            - lakukan Login User : POST {{baseURL}}/users/auth

            - Get User Profile : POST {{baseURL}}/users/profile

            - send data , kemudian akan ada response :
                {
                    "_id": "6491653d4356f0120a79bd45",
                    "name": "john doe",
                    "email": "john@gmail.com"
                }
            - hal ini terjadi karna token=cookie terbaca
            - lakukan juga pada update user profile

## Update User Profile Endpoint

    Todo :
    1.  backend/controller/userController.js
        - mencari user berdasarkan id
        - memeriksa apakah userditemukan berdasarkan id yang diberikan
        - jika ditemukan update name || jika name tidak diberi nilai baru , maka name  tidak berubah
        - jika ditemukan update email || jika email tidak diberi nilai baru , maka email  tidak berubah
        - memeriksa ada kah permintaan perubahan nilai untuk password
        - menyimpan perubahan kedatabse
        - mengirim kembali data yang telah diperbaharui kedalam response json
    2.  pengujian:
        - jalankan server : npm run server
        - pada browser http://localhost:5000
        - pada console.log akan menampilkan:
            - Server stared on port 5000
            - MongoDB Connected to ac-daqo3xj-shard-00-00.junhttb.mongodb.net
    3.  pengujian pada postman

        - jika sudah login:
            - lakukan Login User : POST {{baseURL}}/users/auth

            - Update User Profile : PUT {{baseURL}}/users/profile

            - body -> x-www-form-url-encoded
            email: masukan email baru
            name: masukan name baru
            password: masukan password baru
            - send data , kemudian akan ada response :
            {
                "_id": "649032584791100eb448eb2f",
                "name": nama yang baru saja di update,
                "email": email yang baru saja diupdate
            }
            - response akan menampilkan object dengan data yang baru saja di update

## Starting The Frontend

    Todo :
    1.  install react vite
        - npm create vite@latest frontend
        - cd frontend
        - /frontend npm install
    2.  pengujian pada browser:
        - jalankan react vite: npm run dev

## Concurrently Setup & vite.config setup

    Todo :
    1.  install concurrently
        - pada root directory:  npm i -D concurrently
    2.  vite.config.js
        - setup server configuration agar port bejalan di 3000
        - setup server backend api yang berjalan di port 5000
    3.  package.json
        - setup server configuration agar dapat berjalan sekaligus dengan concurrently
            "server": "nodemon backend/server.js",
            "client": "npm run dev --prefix frontend",
             "dev": "concurrently \"npm run server\" \"npm run client\""
    4.  hapus file App.css
    5.  index.html
        - namai title dengan MERN Auth
    6.  App.jsx
        - setup MERN Auth
    7.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## React Bootstrap Setup

    Todo :
    1.  install bootstrap dan react icons
        - pada /frontend : npm i bootstrap react-bootstrap react-icons
    2.  main.jsx
        - import bootstrap
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## Header Component

    Todo :
    1.  components/Header.jsx
        - setup header component
        - docs: https://react-bootstrap-v4.netlify.app/components/navbar/
        - import dan pasang react-icons/fa
    2.  App.jsx
        - import dan pasang Header
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## HomeScreen & Hero

    Todo :
    1.  components/Hero.jsx
        - setup Hero component
        - docs: https://react-bootstrap-v4.netlify.app/components/navbar/
    2.  screens/HomeScreen.jsx
        - rafc
        - import dan pasang Hero
    3.  App.jsx
        - import dan pasang HomeScreen
    4.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## React Router Setup

    Todo :
    1.  install react router dom & react router bootstrap
        - /frontend : npm install react-router-dom react-router-bootstrap
    2.  main.jsx
        - import dan pasang :
            createBrowserRouter,createRoutesFromElements,Route,RouterProvider
    3.  App.jsx
        - import dan pasang Outlet
        - import danb pasang Container
    4.  components/Header.jsx
        - import dan pasang LinkContainer
        - linkContainer digunakan agar halaman tidak refresh
    5.  components/Hero.jsx
        - import dan pasang LinkContainer
        - linkContainer digunakan agar halaman tidak refresh
    6.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## Login & Register Form UI

    Todo :
    1.  components/FormContainer.jsx
        - setup FormContainer, pasang props children
    2.  screens/LoginScreen.jsx
        - import dan pasang FormContainer
        - stup form login
    3.  screens/RegisterScreen.jsx
        - import dan pasang FormContainer
        - copy paste code dari LoginScreen, kemudian modifikasi
    4.  main.jsx
        - import dan pasang LoginScreen & RegisterScreen
    5.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## Redux Toolkit Setup

    Todo :
    1.  install redux toolkit
        - npm install @reduxjs/toolkit react-redux
    2.  src/store.js
        - setup store
    3.  main.jsx
        - import dan pasang store
        - import dan pasang Provider
    4.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000

## Auth Slice

    Todo :
    1.  frontend/src/slices/authSlice.js
        - setup authSlice
    2.  src/store.js
        - import dan pasang authSlice dengan nama authReducer
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000
        - klik nanan pada browser-> inspect-> redux
            auth:{} 1 key
                userInfo:null
        - jika tampil seperti diatas maka setup yang kita lakukan untuk
          reducer dan action dalam redux berhasil

## API Slices

    Todo :
    1.  frontend/src/slices/apiSlice.js
        - setup apiSlice
    2.  src/store.js
        - import dan pasang apiSlice
    3.  frontend/src/slices/usersApiSlice.js
        - setup usersApiSlice
    4.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk backend : buka post man dan coba lakukan request
        - untuk frontend: http://localhost:3000
        - klik nanan pada browser-> inspect-> redux
            akan ada object api : {}
        - jika tampil seperti diatas maka setup yang kita lakukan berhasil

## Login Functionality

    Todo :
    1.  frontend/src/screens/LoginScreen.js
        - import dan pasang useNavigate
        - import dan pasang useDispatch
        - import dan pasang useSelector
        - import useLoginMuttation
        - custom hook login dengan useLoginMuttation
        - import dan pasang useEffect
    2.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/login
        - login dengan user tidak terdafatar terlebih dahulu,
          akan ada pesan error : Invalid email or password
          seperti yang kita buat pada backend userController
        - sekarang coba lakukan login dengan user terdaftar,
          akan diarahkan kehalaman home, ini menndakan user berhasil login
        - klik nanan pada browser-> inspect-> redux
            akan ada object api : {} -> userInfo{_id:"649be39e833c7980245ff94a"
                                                name:"john doe"
                                                email:"john@gmail.com"}
        - jika tampil seperti diatas maka setup yang kita lakukan berhasil

## React Toastify Setup

    Todo :
    1.  install react toastify
        - /frontend:  npm install react-toastify
        - docs : https://fkhadra.github.io/react-toastify/installation/
    2.  App.jsx
        - import dan pasang ToastContainer
        - import 'react-toastify/dist/ReactToastify.css'
    3.  frontend/src/screens/LoginScreen.js
        - import dan pasang toastify
    4.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/login
        - login dengan user tidak terdafatar terlebih dahulu,
          akan ada pesan error : Invalid email or password
          dalam bentuk toast
        - sekarang coba lakukan login dengan user terdaftar,
          akan diarahkan kehalaman home, dan akan ada toast Login berhsil

## Auth Header Links

    Todo :
    1.  components/Header.jsx
        - tampilkan nilai userInfo dengan hook useSelector
        - buat dropdown dengan logic menggunakan userInfo sebagai kondisinya
    2.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/login
        - sekarang coba lakukan login dengan user terdaftar,
          akan diarahkan kehalaman home, dan akan ada toast Login berhsil
        - pada alaman home bagian header tidak lagi ada menu login dan register
          akan tetapi digantikan oleh username yang sedang login dan ada dropdown
          yang berisikan profile dan logout

## Logout Functionality

    Todo :
    1.  slices/usersApiSlice.js
        - buat endpoint logout
    2.  components/Header.jsx
        - deklar useDispatch
        - deklar useNavigate
        - buat function logoutHandler
        - lakukan pemanggilan ke endpoint logout
        - kirim aksi logout ke authSlice, dalam hal ini untuk menghapus informasi authentication dari state
        - pasang toas untuk logout
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/
        - sekarang coba lakukan logout
        - jika berhasil akan ada toast anda berhasil logout
        - menu login dan register akan tampil

## Loader Component

    Todo :
    1.  src/components/Loader.jsx
        - setup loader with react bootstrap
    2.  src/screens/LoginScreen.jsx
        - import dan pasang Loader Component
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/
        - sekarang pada halaman login coba klik button login
        - jika berhasil akan ada spiner animation

## Register Functionality

    Todo :
    1.  src/slices/userApiSlice.jsx
        - setup register(duplicate dri login kemudian modifikasi)
    2.  src/screens/RegisterScreen.jsx
        - import dan pasang useNavigate
        - import dan pasang useDispatch
        - import dan pasang useSelector
        - import useRegisterMuttation
        - custom hook register dengan useRegisterMuttation
        - import dan pasang useEffect
        - import dan pasang Loader Component
        - import Loader Component
    3.  pengujian pada browser:
        - jalankan react vite: npm run dev
        - server backend dan frontend akan berjalan sekaligus
        - untuk frontend: http://localhost:3000/
        - klik button register, kemudian cob but data baru
        - jika berhasil akan ada spiner animation, kemudian akan ada
          toast success register, dan diarahkan kehalaman home
        - liat juga pada database mongodb, akan ada satu data bertambah tiap kali register berhasil
