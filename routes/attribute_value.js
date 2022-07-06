let {getvalue,addAttrValue,AttrValueUpdate,deleteAttrValue}=require("../controller/attribute_value")

var express = require('express');
const { Router } = require("express");
var router = express.Router();







router.delete("/deleteAttrValueData/:attribute_value_id",deleteAttrValue);
router.get("/getvalue", getvalue);
router.post("/addAttrValue",addAttrValue);
router.put("/AttrValueUpdate/:attribute_value_id",AttrValueUpdate)

module.exports = router