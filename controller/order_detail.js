var Connection=require("../config/connaction")

exports.getordersdetailslist=(req,res) =>{
    Connection.query('SELECT* FROM order_detail',(err,row)=>{
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




exports.add_order_detail =(req,res)=>{
    const { order_id, product_id, attributes, product_name,quantity,unit_cost } = req.body
    Connection.query('SELECT* FROM orders WHERE order_id=?', order_id, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (data.length > 0) {
                Connection.query(`INSERT INTO order_detail(order_id,product_id,attributes,product_name,quantity,unit_cost VALUE ('${order_id}','${product_id}','${attributes}','${product_name}','${quantity}','${unit_cost}')`, (err, row) => {
                    if (err) {
                        res.json({
                            code: 400,
                            msg: err
                        })
                    } else {
                        res.json({
                            code: 200,
                            msg: "data adedd sucessfully"
                        })
                    }
                })
            } else {
                res.json({
                    code: 400,
                    msg: "Order Id Not exist in order table."
                })
            }
        }
    })
    
}



exports.update_order_detail =(req,res)=>{
    const { order_id, product_id, attributes, product_name,quantity,unit_cost } = req.body
    if (order_id) {
        Connection.query('SELECT* FROM orders WHERE order_id=?', order_id, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
            } else {
                if (data.length > 0) {
                    Connection.query('UPDATE order_detail SET order_id=?, product_id=?,attributes=?,product_name=?,quantity=?,unit_cost=? WHERE item_id=?', [order_id, product_id, attributes, product_name,quantity,unit_cost, req.params.item_id], (err, rows) => {
                        if (err) {
                            res.json({
                                code: 400,
                                msg: err
                            })
                        } else {
                            res.json({
                                code: 200,
                                msg: "updates sucessfully"
                            })
                        }
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: "order_id not found in database"
                    })
                }

            }
        })

    } else {
        Connection.query('UPDATE order_detail SET created_on=?,message=?,code=? WHERE item_id=?', [product_id, attributes, product_name,quantity,unit_cost, req.params.item_id], (err, rows) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err

                })
            } else {
                res.json({
                    code: 200,
                    msg: rows
                })
            }
        })
    }
}




exports.deleteordersdetailslist=(req,res)=> {
    Connection.query('DLETE FROM order_detail WHERE item_id=?',req.params.item_id,(err,row)=>{
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