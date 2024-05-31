const express = require("express");
const {User} = require("../db/index")


function cartMiddelWare(req,res,next){
    const {userId} = req.headers;

    User.findOne({
        userId
    }).then(function(cart){
        if(cart){
            next()
        }
        else{
            res.json({
                msg:"Authenticaton failed"
            })
        }
    })
}

module.exports = cartMiddelWare