
const {User} = require("../db")
function productMiddelware(req,res, next){
   
   const {username, password} = req.headers;
    User.find({
        username,
        password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.json({
                msg:"Authentication failed"
            })
        }
    })
}

module.exports = productMiddelware