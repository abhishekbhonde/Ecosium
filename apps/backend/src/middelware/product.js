const {User} = require('../db/index')
function productMiddelware(req,res, next){
   
   const {username, password} = req.headers;
    User.findOne({
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