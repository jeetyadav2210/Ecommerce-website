var Connection = require("../config/connaction")


exports.getcategorylistData = (req, res) => {
    Connection.query('SELECT *FROM category', (err, rows, fields) => {
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



exports.addcategory = (req, res) => {
    Connection.query(`INSERT INTO category (department_id,name,description) VALUES('${req.body.department_id}','${req.body.name}','${req.body.description}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "product  category added succussfully"
            })
        }
    })
}


exports.updatecategory = (req, res) => {
    Connection.query('UPDATE category SET name=?, description=? WHERE category_id=?', [req.body.name, req.body.description, req.params.category_id], (err, rows) => {
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



exports.deletecategory = (req, res) => {
    Connection.query('DELETE FROM category WHERE category_id=?', req.params.category_id, (err, rows) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "delete succesfully"
            })
        }
    })
}