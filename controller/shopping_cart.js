var Connection = require("../config/connaction")

exports.getshopping_cart = (req, res) => {
    Connection.query('SELECT* FROM shopping_cart', (err, row) => {
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



exports.addshopping_cart = (req, res) => {
    const { cart_id, product_id, attributes, quantity, added_on, buy_now } = req.body
    Connection.query(`INSERT INTO shopping_cart (cart_id,product_id,attributes,quantity,buy_now,added_on) VALUES('${cart_id}','${product_id}','${attributes}','${quantity}','${buy_now}','${added_on}')`, (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "add sucessfully"
            })
        }
    })
}



exports.updateshopping_cart = (req, res) => {
    Connection.query('UPDATE shopping_cart SET cart_id=?,product_id=?,attributes=?,quantity=?,buy_now=?,added_on=? WHERE item_id=?', [req.body.cart_id, req.body.product_id, req.body.attributes, req.body.quantity, req.body.buy_now, req.body.added_on, req.params.item_id], (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 400,
                msg: "updated sucessfully"
            })
        }
    })
}

exports.deleteshopping_cart = (req, res) => {
    Connection.query('DELETE FROM shopping_cart WHERE item_id=?', req.params.item_id, (err, row) => {
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




