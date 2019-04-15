var express = require('express');
// var path = require('path');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nowdb'
});

// app.get('/', function(req,res)  {
//     connection.query('SELECT * FROM users', function(err,res)  {
//         if(err) throw err;
//         res.send(res);
//     });
// });
connection.connect(function(err)  {
    if(err) throw err;
    console.log('You are Connected..');


connection.query("CREATE TABLE people(id int primary key, name varchar(255), age int, address text)", function(err, result) {
    if(err) throw err;
    connection.query("INSERT INTO people(name, age, address) VALUES(?,?,?)", ['Rancho', '45', 'California, USA'], function(err,results) {
        if(err) throw err;
        connection.query("SELECT FROM people", function(err,results)  {
            if(err) throw err;
      
        console.log(results[0].id);
        console.log(results[0].name);
        console.log(results[0].age);
        console.log(results[0].address);
    });
});
});
});



var server = app.listen(4000, function(res,res)  {
    console.log('Database Connected...');
});