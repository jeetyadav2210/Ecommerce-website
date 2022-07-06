let { addProductData, getproduct, updateproductData, deletedata } = require("../controller/product")



var express = require('express');
const { Router } = require("express");
var router = express.Router();





router.delete("/deleteproductData/:product_id", deletedata)
router.put("/updateproductData/:product_id", updateproductData)
router.post("/productdataAdd", addProductData);
router.get("/getdataProduct/:product_id", getproduct)



module.exports = router