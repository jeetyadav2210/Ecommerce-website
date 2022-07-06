
var express = require('express');
const { Router } = require("express");
const {get, route } = require('./product');
var router = express.Router();

let{getshiping,deleteshipping,addshipping}=require("../controller/shipping")





router.post("/addshippingData",addshipping)
router.delete("/deleteshippingData/:shipping_id",deleteshipping)
router.get("/getshipingData",getshiping);



module.exports = router