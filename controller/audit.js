const { json } = require("express")
var Connection = require("../config/connaction")


exports.addaudit = (req, res) => {
    const { order_id, created_on, message, code } = req.body
    Connection.query('SELECT* FROM orders WHERE order_id=?', order_id, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            if (data.length > 0) {
                Connection.query(`INSERT INTO audit(order_id,created_on,message,code VALUE ('${order_id}','${created_on}','${message}','${code}')`, (err, row) => {
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


exports.updateaudit = (req, res) => {
    const { order_id, created_on, message, code } = req.body
    if (order_id) {
        Connection.query('SELECT* FROM orders WHERE order_id=?', order_id, (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
            } else {
                if (data.length > 0) {
                    Connection.query('UPDATE audit SET order_id=?, created_on=?,message=?,code=? WHERE audit_id=?', [order_id, created_on, message, code, req.params.audit_id], (err, rows) => {
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
        Connection.query('UPDATE audit SET created_on=?,message=?,code=? WHERE audit_id=?', [created_on, message, code, req.params.audit_id], (err, rows) => {
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


exports.deleteaudit = (req, res) => {
    Connection.query('DELETE FROM audit WHERE audit_id=?', [req.params.audit_id], (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: row
            })
        }
    })
}






exports.getaudit = (req, res) => {
    Connection.query('SELECT * FROM audit', (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: row
            })
        }
    })
}


