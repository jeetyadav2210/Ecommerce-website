var Connection = require("../config/connaction")
const jwt = require("jsonwebtoken")


exports.getmyinfo = (req, res) => {
    Connection.query('SELECT * FROM customer WHERE customer_id=?', req.params.id, (err, row) => {
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





exports.postcustomer = (req, res) => {
    Connection.query("SELECT COUNT(*) AS cnt FROM customer WHERE email = ? ",
        req.body.email,
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                if (data[0].cnt > 0) {
                    res.json({
                        code: 400,
                        msg: "email already exist,please login",
                        status: false
                    })
                    // Already exist 
                } else {

                    Connection.query(`INSERT INTO customer (name,email,password,credit_card,address_1,address_2,city,region,postal_code,country,shipping_region_id,day_phone,eve_phone,mob_phone) VALUES('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.credit_card}','${req.body.address_1}','${req.body.address_2}','${req.body.city}','${req.body.region}','${req.body.postal_code}','${req.body.country}','${req.body.shipping_region_id}','${req.body.day_phone}','${req.body.eve_phone}','${req.body.mob_phone}')`, (err, insert) => {
                        if (err) {
                            res.json({
                                code: 400,
                                msg: "somthing went wrong",
                                status: false
                            })
                            // retunn error
                        } else {
                            res.json({
                                code: 200,
                                msg: "registration success",
                                status: true
                            })
                            // return success , user will insert 
                        }
                    })
                }
            }
        })
}


exports.postlogin = (req, res) => {
    var { email, password } = req.body
    Connection.query('SELECT* from customer WHERE email=?',
        email,
        (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
            } else {
                if (data.length <= 0) {
                    res.json({
                        code: 400,
                        msg: "email not exit"
                    })
                } else {
                    console.log(data, data[0]);
                    if (data[0].password == password) {
                        let id = data[0].customer_id
                        jwt.sign({ id }, "jeet", { expiresIn: '5h' }, (err, token) => {
                            if (err) {
                                console.log(err);
                                res.json({
                                    code: 400,
                                    msg: err
                                })
                            } else {
                                res.json({
                                    code: 200,
                                    token: token,
                                    data: data
                                });
                            }
                        })

                    } else {
                        res.json({
                            code: 400,
                            msg: "password not match"
                        })
                    }
                }

            }
        })
}








    // {
    //     "name":"jitendra yaduvanshi",
    //     "email":"jeetyaduvanshi7@gmail.com",
    //     "password":"jitendra!@#123",
    //     "credit_card":"slice,sbi,union.icici",
    //     "address_1":"108 chhoti khajrani abmbe mata mandir indore",
    //     "address_2":"102,harda sastri colony",
    //     "city":"khategaon",
    //     "region":"Hindu",
    //     "postal_code":"PAD123",
    //     "country":"india",
    //     "shipping_region_id":1,
    //     "day_phone":"avaiilable",
    //     "eve_phone":"not avaiilable",
    //     "mob_phone":"avaiilable on time"
    //     }





