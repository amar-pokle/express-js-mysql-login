var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'don'
  });

//   connection.connect(function(err)  {
//       if(err) throw err;
//       console.log('Databse Created!!');
//   });


// connection.query("create table book(id auto_increment primary key, username varchar(255) not null, password varchar(255) not null, email varchar(255) not null)", function(err,res)  {
//     console.log('Table Created!!!');
// });


