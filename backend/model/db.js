const mongoose = require('mongoose')
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
const userSchemas = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const User=mongoose.model('User',userSchemas)
module.exports=User