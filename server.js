var express = require("express")
var app = express();
app.use(express.json())

var connaction = require("./config/connaction")

var product = require("./routes/product")
var simpleInsert = require("./routes/shopping")
var readInsert = require("./routes/department")
var getCategorydata = require("./routes/product_category")
var getData = require("./routes/category")
var getreview = require("./routes/review")
var getattribute = require("./routes/attribute")
var getvalue= require("./routes/attribute_value");
var getTax=require("./routes/tax")
var getshiipingregion=require("./routes/shipping_region");
var getshiping= require("./routes/shipping")
var getaudit = require("./routes/audit")
var order_detail=require("./routes/order_detail")
var getshopping_cart=require("./routes/shopping_cart")
var postcustomer= require("./routes/customer")


var tokenCheckDatas =require("./routes/helper")




app.use("/",tokenCheckDatas)
app.use("/",postcustomer)
app.use("/",getshopping_cart)
app.use("/",order_detail)
app.use("/",getaudit)
app.use("/",getshiping)
app.use("/",getshiipingregion)
app.use("/",getTax);
app.use("/",getvalue);
app.use("/", getattribute)
app.use("/", getreview)
app.use("/", getData);
app.use("/", getCategorydata);
app.use("/", readInsert);
app.use("/", simpleInsert);
app.use("/", product);



app.get("/test", (req, res) => {
    res.send("api is woking")
})

var server = app.listen(8000, function() {
    console.log("server is runing on port 8000");
});