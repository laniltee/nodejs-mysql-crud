var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'java_mysql'
})

connection.connect();

app.listen(8081, function(error){
    if(!error){
        console.log("HTTP Server Running !")
    }
})

app.get('/users', function(req, res){
    connection.query("SELECT * FROM users", function(error, results, fields){
        if(error){
            throw error
        }
        res.json(results)
    })
})
