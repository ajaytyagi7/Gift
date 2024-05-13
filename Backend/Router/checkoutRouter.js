const express = require('express');
const Model = require('../Model/checkoutModel');

const router = express.Router();


router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)

        });
});

router.get('/getall', (req, res) => {


    Model.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});


router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then((result) => {
            if(result){
                res.json(result);
            }else{
                res.status(400).json({message:'User Not Found'});
            }
        }).catch((err) => {
            res.status(500).json(err)
        });
});

module.exports = router;