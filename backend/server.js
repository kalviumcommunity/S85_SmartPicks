const express = require('express')
const app = express()
const port = 3000
const User = require('./model/db');

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/ping',(req,res)=>{
    res.send("This is ping route")
})

app.post('/create', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})