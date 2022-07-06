"use strict"
let { readInsert, getData, updateData, deleteData } = require("../controller/department")


var express = require('express');
var router = express.Router();





router.delete("/deleteDepartmentlist/:department_id", deleteData);
router.put("/upadateDepartment/:department_id", updateData);
router.get("/getDepartmentlist", getData);
router.post("/data", readInsert);



module.exports = router



var obj1 = {  
    x:  123,  
    y:  "Welcome to JavaTpoint",  
    z: function(){  
       return this.y;  
    }  
 }  
 
console.log(obj1.z());
 //obj1.x

//  Array.length

var a= 123==="123"
console.log(a);

console.log(isNaN(12));  


console.log("10"+20+30);