const express = require('express')
const router = express.Router();
const User = require('../model/db');

router.use(express.json())
router.use(express.urlencoded({extended: false}))

router.get('/get/:username' , async (req,res)=>{
    try {
        const username = req.params.username;
        const findUser = await User.find({username});
        res.send(findUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/create', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete/:username', async (req,res) => {
    try {
        const username = req.params.username;
        const deleteUser = await User.deleteMany({ username});
        res.send(deleteUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put('/update/:newuser/:olduser', async (req,res)=>{
    try{
        const newuser = req.params.newuser;
        const olduser = req.params.olduser;
        const updateuser = await User.findOneAndUpdate({username:olduser} , {username:newuser})
        res.send(updateuser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;