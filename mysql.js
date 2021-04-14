var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'v2008'
});

connection.connect();

 
connection.query('select goods_id,goods_name,goods_number from p_goods limit 4', function (error, results, fields) {
    console.log(results[0].goods_name)              //[].goods_name  查询第几条
});
 
connection.end();
