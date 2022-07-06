let{addshippingregion,getshippingregion,updateshiping_region,deleteshiping_region}=require("../controller/shipping_region")

var express = require('express');
const { Router } = require("express");
const {get, route } = require('./product');
var router = express.Router();



router.delete("/deleteshiping_regionData:/shipping_region_id",deleteshiping_region)
router.put("/updateshiping_regioData:/shipping_region_id",updateshiping_region);
router.get("/getshippingregionData",getshippingregion);
router.post("/addShippingregionData",addshippingregion);

module.exports = router