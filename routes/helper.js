var express = require('express');
const { Router } = require("express");
const { getmyinfo } = require('../controller/customer');
var router = express.Router();
let {tokenCheck}=require("../helper")









router.post("/tokenCheckData/:id",tokenCheck)
module.exports=router

