var mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    user: "root",
    password: "shivani",
    host: "localhost",
    database: "ProductDb"
})



mysqlConnection.connect((err) => {
    if (err) {
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));

    } else {
        console.log("server is connacted to mysql server");
    }
})
module.exports = mysqlConnection;