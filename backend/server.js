const express = require('express')
const app = express()
const port = 3000
const User = require('./model/db');
const createRoute = require('./routes/routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/ping',(req,res)=>{
    res.send("This is ping route")
})

app.use(createRoute);


app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})