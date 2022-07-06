var express = require("express")
const { Router } = require("express");
var router= express.Router();
let {getshopping_cart,deleteshopping_cart,addshopping_cart,updateshopping_cart}=require("../controller/shopping_cart")






router.put("/updateshopping_cart/:item_id",updateshopping_cart)
router.post("/addshopping_cartData",addshopping_cart)
router.delete("/deleteshopping_cartData/:item_id",deleteshopping_cart)
router.get("/getshopping_cartData",getshopping_cart)


module.exports = router