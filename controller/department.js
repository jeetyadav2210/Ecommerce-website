var Connection = require("../config/connaction")

//insert data in database
exports.readInsert = (req, res) => {
    Connection.query(`INSERT INTO department (name,description) VALUES('${req.body.name}','${req.body.description}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "data insert succesfully"
            })
        }
    })
};



exports.getData = (req, res) => {
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
    });
}



exports.updateData = (req, res) => {
    Connection.query('UPDATE department SET name=? WHERE department_id=?', [req.body.name, req.params.department_id], (err, rows) => {
        // console.log(req.body, req.params);
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

exports.deleteData = (req, res) => {
    Connection.query(`DELETE FROM department WHERE department_id=?`, [req.params.department_id], (err, row) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "deleted succes"
            })
        }
    })
}