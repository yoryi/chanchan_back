const express = require('express');
const logger = require('morgan');

const router = express.Router();

router.get('/getSells',(req,res,next)=>{
    res.send("hola")
})

router.post('/sellProduct',(req,res,next)=>{
    res.send("hola")
})

module.exports = router

