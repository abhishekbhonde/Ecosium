const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/User')


app.use(bodyParser.json());

app.use('/user', userRouter);



const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})