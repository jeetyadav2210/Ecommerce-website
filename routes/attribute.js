let { getattributeData, postattributeData, updateattributeData, deleteattribute } = require("../controller/attribute")

var express = require('express');
const { Router } = require("express");
var router = express.Router();






router.delete("/deleteattribute/:attribute_id", deleteattribute)
router.put("/putattribute/:attribute_id", updateattributeData)
router.post("/postattribute", postattributeData)
router.get("/getattribute", getattributeData)

module.exports = router