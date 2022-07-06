let { getCategorydata, addcategoryData, putCategorydata, deleteCategorydata } = require("../controller/product_category")


var espress = require('express')
const { Router } = require("express");
var router = espress.Router();


router.delete("/deleteProductCategory/:product_id", deleteCategorydata);
router.put("/updateProductCategory/:category_id", putCategorydata);
router.post("/addProductCategory", addcategoryData);
router.get("/getProduct_category/:prouct_id", getCategorydata);




module.exports = router