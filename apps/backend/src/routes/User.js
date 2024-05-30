const express = require('express');
const { User } = require('../db');
const { Router } = require("express");
const router = Router();
const app = express()
app.use(express.json());

// user signup route
router.post('/signup', (res,req)=>{
    const { username,email,password,address} = req.body;
    User.create({
        username,
        email,
        password,
        address
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