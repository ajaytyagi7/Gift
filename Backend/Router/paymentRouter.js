const express = require('express');

const router = express.Router();

router.post('/order',async(req,res)=>{

    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        if(!req.body){
            res.status(400).send('Request Body is Empty')
        }
        const options=req.body;

        const order = await razorpay.orders.create(options); 
        if(!order){
            res.status(500).send('Some Error Occured')
        }
        res.json(order)   

        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router;
