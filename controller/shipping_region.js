const { response } = require("express")
var Connection = require("../config/connaction")

exports.addshippingregion= (req, res) => {
    Connection.query(`INSERT INTO shiping_region (shipping_region) VALUES ('${req.body.shipping_region}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "data added succesfully"
            })
        }


    })
}

exports.getshippingregion=  (req,res) => {
    Connection.query("SELECT *FROM shipping_region", (err, row, field) => {
   if(err){
    res.json({
        code:400,
        msg:err
    })
   }else{
    res.json({
        code:200,
        msg:row
    })
   }
    })
}


exports.updateshiping_region= (req,res) =>{
    Connection.query('UPDATE shipping_region SET shipping_region=?, WHERE shipping_region_id=?', [req.body.shipping_region,req.params.shipping_region_id], (err, rows) => {
    if(err){
        res.json({
            code:400,
            msg:err
        })
    }else{
    res.json({
        code:200,
        msg:"update succefully"
    })
    }
    })
}


exports.deleteshiping_region= (req,res)=>{
    Connection.query('DELETE FROM shipping_region WHERE shipping_region_id=?',[req.params.shipping_region_id],(err,row)=>{
        if(err){
            res.json({
                code:400,
                msg:err
            })
        }else{
            res.json({
                code:200,
                msg:row
            })
        }
    })
}

