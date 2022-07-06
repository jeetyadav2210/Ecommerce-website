let { getcategorylistData, addcategory, updatecategory, deletecategory } = require("../controller/category")

var express = require('express');
const { Router } = require("express");
var router = express.Router();






router.delete("/deleteData/:category_id", deletecategory)
router.put("/updatedata/:category_id", updatecategory)
router.post("/addData", addcategory)
router.get("/getData", getcategorylistData)




module.exports = router