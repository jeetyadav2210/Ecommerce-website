var Connection = require("../config/connaction")


exports.getattributeData = (req, res) => {``
    Connection.query('SELECT *FROM attribute', (err, rows, fields) => {
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

exports.postattributeData = (req, res) => {
    Connection.query(`INSERT INTO attribute (name) VALUES('${req.body.name}')`, (err, insert) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "add succesfully"
            })
        }
    })
}


exports.updateattributeData = (req, res) => {
    Connection.query('UPDATE attribute SET name=? WHERE attribute_id=?', [req.body.name, req.params.attribute_id], (err, rows) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "data update succesfully"
            })
        }
    })
}


exports.deleteattribute = (req, res) => {
    Connection.query('DELETE FROM attribute WHERE attribute_id=?', req.params.attribute_id, (err, rows) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "data delete succesfully"
            })
        }
    })
}





// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);