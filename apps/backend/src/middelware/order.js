const express = require("express")
const {User} = require("../db/index");

async function orderMiddelware(req,res,next){
    const {userId} = req.headers

    const user = await User.findOne({
        userId
    })
     if(user){
           
              next()
        } else{
            return res.json({
                msg:"wrong user id "
            })
        }
    
}

module.exports = orderMiddelware