const express = require('express')      //引入模块
const mysql = require("mysql")
const app = express()               //调用express
const port = 8080                   //服务运行的端口               



app.get('/list',function(req,res){
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'v2008'
    });
    //创建连接
    connection.connect();

    connection.query('select goods_id,goods_name,goods_number from p_goods limit 10', function (error, results, fields) {
        console.log(results)              //[].goods_name  查询第几条
    });
 
    connection.end();

    //向客户端响应数据
    res.send("JSON.stringify(results)")
})




app.get('/', (req, res) => {

    const list = [
        {
            id:1001,
            name:"zhangsan",
            age:11
        },
        {
            id:1002,
            name:"lisi",
            age:11
        },
        {
            id:1003,
            name:"wuwua",
            age:11
        },
    ]
    //将数组转为JSON字符串
    res.send(JSON.stringify(list))



  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})