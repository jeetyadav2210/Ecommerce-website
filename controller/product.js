var Connection = require("../config/connaction");


exports.productInsert = (req, res) => {
    Connection.query('SELECT *FROM department', (err, rows, fields) => {
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

exports.simpleApi = (req, res) => {
    Connection.query('SELECT *FROM department', (err, rows, fields) => {
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