var express = require("express")
var app = express();
app.use(express.json())

var connaction = require("./config/connaction")

var product = require("./routes/product")
var simpleInsert = require("./routes/shopping")
var readInsert = require("./routes/department")





app.use("/", readInsert);
app.use("/", simpleInsert);
app.use("/", product);



app.get("/test", (req, res) => {
    res.send("api is woking")
})

var server = app.listen(7000, function() {
    console.log("server is runing on port 7000");
})