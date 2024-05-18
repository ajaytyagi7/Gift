const express = require('express');

const UserRouter = require('./Router/UserRouter');
const GiftUploadRouter = require('./Router/giftUploadRouter');
const utilRouter = require('./Router/util')
const checkoutRouter = require('./Router/checkoutRouter');
const paymentRouter = require('./Router/paymentRouter');
const razorpay=require('razorpay');

require("dotenv").config();
const cors = require('cors');


const app=express();
const port= 4000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    orgin: 'http://localhost:5173'

}));


app.use('/user',UserRouter);
app.use('/gift',GiftUploadRouter);
app.use('/util', utilRouter);
app.use('/checkout',checkoutRouter);
app.use('/payment',paymentRouter);
app.use(express.static('./uploads'));


app.listen(port,() =>{console.log('Server Started !!')});