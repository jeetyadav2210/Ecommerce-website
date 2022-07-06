var express = require('express');
const { Router } = require("express");
var router = express.Router();
let {postcustomer,postlogin,getmyinfo}=require("../controller/customer");

let {tokenCheck}=require("../helper");







router.get("/getmyinfoData/:id",tokenCheck,getmyinfo)
router.post("/postloginData",postlogin)
router.post("/postcustomerData",postcustomer)

module.exports = router