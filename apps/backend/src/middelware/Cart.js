// middleware/Cart.js
const { User } = require('../db/index');

module.exports = async function (req, res, next) {
    const {userId} = req.headers;

    // if (!userId) {
    //     return res.status(400).json({ msg: 'userId is required' });
    // }
   const user = await User.findOne({
    userId
   })
   if(user){
    next()
   }
   else{
    res.json({
        msg:"Error while authentication"
    })
   }
};
