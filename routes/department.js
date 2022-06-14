let { readInsert, getData, updateData, deleteData } = require("../controller/department")


var express = require('express');
const { Router } = require("express");
var router = express.Router();








router.delete("/deleteDepartmentlist/:department_id", deleteData);
router.put("/upadateDepartment/:department_id", updateData);
router.get("/getDepartmentlist", getData);
router.post("/data", readInsert);



module.exports = router