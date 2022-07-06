const { json } = require("express")
var Connection = require("../config/connaction")

exports.getvalue=(req,res)=>{
Connection.query('SELECT *FROM attribute_value', (err, rows, fields)=>{
if(err){
    res.json({
        code:400,
        msg:err
    })
}else{
    res.json({
        code:200,
        msg:rows
    })
}
})
}



exports.addAttrValue =(req, res) => {
    var { attribute_id } = req.body
    Connection.query('SELECT * FROM attribute WHERE  attribute_id=?', attribute_id, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
                console.log(err);
            } else {
                console.log(data);
                if (data.length < 0) {
                    res.json({
                        code: 400,
                        msg: "Attribut not exist,please add",
                        status: false
                    })
                } else {
                    Connection.query(`INSERT INTO attribute_value (attribute_id,value) VALUES('${req.body.attribute_id}','${req.body.value}')`, (err, insert) => {
                        if (err) {
                            res.json({
                                code: 400,
                                msg: err
                            })
                        } else {
                            res.json({
                                code: 200,
                                msg: "add attribute value succesfully"
                            })
                        }
                    })
                }
            }
        })
}






exports.AttrValueUpdate =(req, res) => {
    var { attribute_id } = req.body
    Connection.query('SELECT * FROM attribute WHERE  attribute_id=?',attribute_id,(err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
                console.log(err);
            } else {
                console.log(data);
                if (data.length < 0) {
                    res.json({
                        code: 400,
                        msg: "Attribute value not exist,please add",
                        status: false
                    })
                } else {
                    Connection.query(`UPDATE attribute_value SET value=? WHERE attribute_value_id=?`,[req.body.value,req.params.attribute_value_id], (err, insert) => {
                        if (err) {
                            res.json({
                                code: 400,
                                msg: err
                            })
                        } else {
                            res.json({
                                code: 200,
                                msg: "update attribute value succesfully"
                            })
                        }
                    })
                }
            }
        })
}




exports.deleteAttrValue= (req,res)=>{
    Connection.query('DELETE FROM attribute_value WHERE attribute_value_id=?',[req.params.attribute_value_id],(err,row)=>{
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



