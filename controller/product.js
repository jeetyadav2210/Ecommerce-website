var Connection = require("../config/connaction");

exports.getproduct = (req, res) => {
    Connection.query('SELECT *FROM product WHERE product_id=?', req.params.product_id, (err, rows, fields) => {
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

        console.log(rows[0]);
    });
}


exports.addProductData = (req, res) => {
    Connection.query(`INSERT INTO product (name,description,price,discounted_price,image,image_2,thumbnail,display) VALUES('${req.body.name}','${req.body.description}','${req.body.price}','${req.body.discounted_price}','${req.body.image}','${req.body.image_2}','${req.body.thumbnail}','${req.body.display}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "product added succussfully"
            })
        }
    })
}



exports.updateproductData = (req, res) => {
    Connection.query('UPDATE product SET name=?, description=? WHERE product_id=?', [req.body.name, req.body.description, req.params.product_id], (err, rows) => {
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


exports.deletedata = (req, res) => {
    Connection.query('DELETE FROM product WHERE product_id=?', req.params.product_id, (err, rows) => {
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