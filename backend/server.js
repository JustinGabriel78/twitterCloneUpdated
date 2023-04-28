require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')
// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors());   // enable CORS for all routes


//routes

app.use('/api/user',userRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error )=> {
        console.log(error)
    })