let {getordersdetailslist,deleteordersdetailslist,add_order_detail,update_order_detail}=require("../controller/order_detail")

var express = require("express")
const { Router } = require("express");
var router= express.Router();


router.delete("/deleteordersdetailslist/:item_id", deleteordersdetailslist);
router.put("/update_order_detail/:item_id", update_order_detail);
router.post("/add_order_detail", add_order_detail);
router.get("/getordersdetailslist", getordersdetailslist);




module.exports = router