const express = require('express');
const { User } = require('../db/index');
const { Router } = require("express");
const router = Router();
const app = express()
app.use(express.json());

// user signup route
router.post('/signup', (req,res)=>{
    const userId = req.body.userId;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.password;
    User.create({
        userId:userId,
        username:username,
        email:email,
        password:password,
        address:address
    }).then(function(value){
        if(value){
            res.json({
                msg:"User created successfully"
            })
        }
        else{
            res.json({
                msg:"User creation failed"
            })
        }
    })
})

module.exports = router