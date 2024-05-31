const express = require("express");
const { Router } = require("express");
const {Category} = require('../db/index')
const {Cart} = require('../db/index');
const cartMiddelWare = require("../middelware/Cart");
const router = Router();
const app = express();
app.use(express.json())

router.post('/cartItems',cartMiddelWare, (req,res)=>{
    const cartId = req.body.cartId;
  

    Cart.create({
        cartId
    }).then(function(value){
        if(value){
            res.json({
                msg:"cart created successfully"
            })
        }else{
            res.json({
                msg:"Error in creating cart"
            })
        }
    })
})

router.get('/noOfCart', async(req,res)=>{
   const response= await Card.find({})
   res.json({
    response:response
   })
})
module.exports=router