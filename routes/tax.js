let { getTax,addTax,updateTax,deleteTax} = require("../controller/tax")

var express = require('express');
const { Router } = require("express");
var router = express.Router();






router.delete("/deleteTaxData/:tax_id",deleteTax)
router.put("/putTaxData/:tax_id",updateTax)
router.post("/postTaxData",addTax)
router.get("/gettaxData",getTax)

module.exports = router