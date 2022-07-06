const { response } = require("express")
var Connection = require("../config/connaction")


exports.getTax = (req, res) => {
    Connection.query("SELECT *FROM tax", (err, row, field) => {
        if (err) {
            res.json({
                code: 200,
                msg: err
            })
        } else {
            res.json({
                code: 400,
                msg: row
            })
        }
    })
}

exports.addTax = (req, res) => {
    Connection.query(`INSERT INTO tax (tax_type,tax_percentage) VALUES('${req.body.tax_type}','${req.body.tax_percentage}')`, (err, insert) => {
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


exports.updateTax = (req, res) => {
    Connection.query('UPDATE tax SET tax_type=?, tax_percentage=? WHERE tax_id=?', [req.body.tax_type, req.body.tax_percentage, req.params.tax_id], (err, rows) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "update succefully"
            })
        }
    })
}


exports.deleteTax = (req, res) => {
    Connection.query('DELETE FROM tax WHERE tax_id=?', req.params.tax_id, (err, rows) => {
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