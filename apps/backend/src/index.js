const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/User')
const productRouter = require('./routes/Product')
const categoryRouter = require('./routes/Category');
const cartRouter = require('./routes/Cart')

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/category', categoryRouter);
app.use('/cart', cartRouter)



const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})