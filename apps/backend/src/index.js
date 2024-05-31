const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/User')
const productRouter = require('./routes/Product')
const categoryRouter = require('./routes/Category');


app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/product', productRouter)
app.user('/category', categoryRouter);



const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})