const jwt = require("jsonwebtoken");


exports.tokenCheck = (req, res, next) => {
    var id = req.params.id
    console.log(id);
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if (bearerHeader != undefined) {
        const s = bearerHeader.split(" ");
        let token = s[1]
        req.token = token

        jwt.verify(req.token, "jeet", (err, data) => {
            if (err) {
                res.json({
                    code: 400,
                    msg: err
                })
            } else {
                if (id == data.id) {
                    // res.json({
                    //     code: 200,
                    //     msg: "authentication successfull"
                    // })
                    next()
                } else {
                    res.json({
                        code: 400,
                        msg: "authentication failled",
                        // data: data
                    })
                }
            }
        })
    } else {
        res.json({
            code: 400,
            msg: "token not found"
        })
    }

}


// git config --global user.email "jitendrayaduvanshi3289@gmail.com"
//   git config --global user.name "jeetyadav2210"