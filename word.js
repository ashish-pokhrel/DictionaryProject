// include mysql module
const mysql = require('mysql');
const config = require('./sqlConfig');

// create a connection variable with the details required
function connectDb() {
    var connectDb = mysql.createConnection(config);
};

// function getData(query) {
//     //let sql = 'Select * From entries';
//     let result = con.query(query, (err, res) => {
//         return res;
//     });
//     console.log(result);
// }

// // connect to the database.
// function connectDb() {
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Database Connected");
//     });

// }


module.exports = {
    connectDb: connectDb,
    //getData: getData
}
