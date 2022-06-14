let { productInsert, simpleApi } = require("../controller/product")



var express = require('express');
const { Router } = require("express");
var router = express.Router();



router.post("/product", productInsert);
router.get("/test1", simpleApi)



module.exports = router