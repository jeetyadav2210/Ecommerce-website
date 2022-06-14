var express = require('express');
const { Router } = require("express");
const { route } = require('./product');
var router = express.Router();
let { simpleInsert } = require('../controller/shopping');


router.get("/normal", simpleInsert)

module.exports = router