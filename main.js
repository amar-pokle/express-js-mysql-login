var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dummy_db'
});

connection.connect(function(err)  {
    if(err) throw err;
    console.log('You Connected!!!');
});
// Create Table in Mysql
// connection.query("CREATE TABLE employee(id int(11) primary key NOT NULL ,employee_name varchar(255) NOT NULL ,employee_salary double NOT NULL ,employee_age int(11) NOT NULL )",function(err,res)  {
//     if(err) throw err;
// });
//  Insert Record into Database using MySQL
// connection.query('INSERT INTO `employee` (`employee_name`, `employee_salary`, `employee_age`) VALUES ("Adam", 2000 , 30)', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The response is: ', results);
//   });
 // Update Record into Database using MySQL 
connection.query('UPDATE employee SET `employee_name`="William",`employee_salary`=2500,`employee_age`=32 ' , function (error, results, fields) {
    if (error) throw error;
    console.log('The response is: ', results);
  });

