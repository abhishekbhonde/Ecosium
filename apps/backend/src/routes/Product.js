const express = require('express');
const { Product } = require('../db/index');
const { Router } = require("express");
const router = Router();
const app = express();
app.use(express.json());

router.post('/products', (req, res) => {  // Corrected the route path
    const productId = req.body.productId;
    const productName = req.body.productName;
    const description = req.body.description;  // Corrected the key name
    const price = req.body.price;
    const stock = req.body.stock;
    // const categoryId = req.body.categoryId;

    Product.create({
        productId,
        productName,
        description,
        price,
        stock,
        // categoryId
    }).then(function(value) {
        if (value) {
            res.json({
                msg: "Product added successfully"
            });
        } else {
            res.json({
                msg: "Failure in adding product"
            });
        }
    }).catch(function(error) {
        res.status(500).json({
            msg: "Error adding product",
            error: error.message
        });
    });
});

module.exports = router;
