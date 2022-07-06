const mysqlConnection = require("../config/connaction");
var connaction = require("../config/connaction");




exports.getCategorydata = (req, res) => {
    connaction.query(`SELECT * FROM product_category INNER JOIN product ON product.product_id = product_category.product_id `, req.params.prouct_id, (err, rows, fields) => {
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




exports.addcategoryData = (req, res) => {
    connaction.query(`INSERT INTO product_category (product_id,category_id) VALUES('${req.body.product_id}','${req.body.category_id}')`, (err, insert) => {
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



exports.putCategorydata = (req, res) => {
    connaction.query('UPDATE product_category SET product_id=? WHERE category_id=?', [req.body.product_id, req.params.category_id], (err, rows) => {
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


exports.deleteCategorydata = (req, res) => {
    connaction.query(`DELETE FROM product_category WHERE product_id=?`, [req.params.product_id], (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "Daa deleted succesfully"
            })
        }
    })

}

//category ka crud
//product ka  crud