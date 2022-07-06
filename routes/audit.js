var express = require('express');
const { Router } = require("express");
var router = express.Router();

let {getaudit,addaudit,deleteaudit,updateaudit}=require("../controller/audit")






router.delete("/deleteauditData/:audit_id",deleteaudit)
router.put("/updateauditData/:audit_id",updateaudit)
router.post("/addauditData",addaudit)
router.get("/getauditData",getaudit);

module.exports = router