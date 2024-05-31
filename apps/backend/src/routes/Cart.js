const express = require("express");
const { Router } = require("express");
const { Cart } = require('../db/index');
const cartMiddleware = require("../middelware/Cart");
const router = Router();
const app = express();
app.use(express.json());

router.post('/cartItems', cartMiddleware, (req, res) => {
    const { cartId } = req.body;

    Cart.create({
        cartId
    }).then(function (value) {
        if (value) {
            res.json({
                msg: "Cart created successfully"
            });
        } else {
            res.json({
                msg: "Error in creating cart"
            });
        }
    }).catch(error => {
        res.status(500).json({
            msg: "Error in creating cart",
            error: error.message
        });
    });
});

router.get('/noOfCart', async (req, res) => {
    try {
        const response = await Cart.find({});
        res.json({
            response: response
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error in fetching carts",
            error: error.message
        });
    }
});

module.exports = router;
