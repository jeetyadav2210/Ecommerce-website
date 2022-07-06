const { response } = require("express")
var Connection = require("../config/connaction")


exports.addreview = (req, res) => {
    Connection.query(`INSERT INTO review (customer_id,product_id,review,rating,created_on) VALUES ('${req.body.customer_id}', '${req.body.product_id}', '${req.body.review}', '${req.body.rating}', '${req.body.created_on}')`, (err, insert) => {
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


exports.getreview = (req, res) => {
    Connection.query("SELECT *FROM review WHERE product_id=?", req.params.product_id, (err, row, field) => {
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



exports.putreview = (req, res) => {
    Connection.query('UPDATE SET review WHERE customer_id=?,req.params.customer_id', req.params.customer_idstomer_id, (err, rows) => {
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




exports.deleterreview = (req, res) => {
    Connection.query('DELETE FROM review WHERE customer_id=?', req.params.customer_id, (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })

        } else {
            res.json({
                code: 200,
                msg: insert
            })
        }
    })
}