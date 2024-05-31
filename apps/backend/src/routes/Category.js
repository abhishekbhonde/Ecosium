const express = require("express");
const { Router } = require("express");
const {Category} = require('../db/index')
const {Cart} = require('../db/index')
const router = Router();
const app = express();
app.use(express.json())


router.post('/Items', (req,res)=>{
    const {categoryId, categoryName,description} = req.body;
    try {
        const category = Category.create({
            categoryId,
            categoryName,
            description
        })
    if(category){
        res.json({
            msg:"Category added successfully"
        })
   
    } else{
        res.status(500).json({
            msg:"Some error occured"
        })
    }
    } catch (error) {
        res.status(500).json({
            msg:"error adding category",
            error:error.message
        })
    }
})


module.exports = router