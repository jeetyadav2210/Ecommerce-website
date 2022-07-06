let { getreview, addreview, putreview, deleterreview } = require("../controller/review")


var express = require('express');
const { Router } = require("express");
const {get, route } = require('./product');
var router = express.Router();




router.delete("/deletereview", putreview)
router.put("/updatereview", deleterreview)
router.post("/postreview", addreview);
router.get("/getreviewData/:product_id", getreview);


module.exports = router