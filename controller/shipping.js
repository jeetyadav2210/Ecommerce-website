const { response } = require("express")
const { connect } = require("../config/connaction")
var Connection = require("../config/connaction")


exports.getshiping= (req,res) => {
    Connection.query('SELECT* FROM shipping',(err,data) =>{
if(err){
    res.json({
        code:400,
        msg:err
    })
}else{
    res.json({
        code:200,
        msg:data
    })
}
    })
}


exports.addshipping=(req,res) => {
Connection.query('SELECT* FROM shipping', (err,data) => {
    if (err) {
        res.json({
            code: 400,
            msg: err
        })
        console.log(err);
    } else {
        console.log(data);
        if (data.length > 0) {
            res.json({
                code: 400,
                msg: "shipping value not exist,please add",
                status: false
            })
        } else {
            Connection.query(`INSERT INTO shipping (shipping_type,shipping_cost,shipping_region_id) VALUES('${req.body.shipping_type}','${req.body.shipping_cost}','${req.body.shipping_region_id}')`, (err, insert) => {
                if (err) {
                    res.json({
                        code: 400,
                        msg: err
                    })
                } else {
                    res.json({
                        code: 200,
                        msg: "add shipping value succesfully"
                    })
                }
            })
        }
    }
})
}


exports.updateshiping=(req,res) => {



}










exports.deleteshipping =(req,res) => {
    Connection.query('DELETE FROM shipping WHERE shipping_id=?',[req.params.shipping_id],(err,data)=>{
        if(err){
            res.json({
                code:400,
                msg:err
            })
        }else{
            res.json({
                code:200,
                msg:"delete succesfully"
            })
        }
    })
}