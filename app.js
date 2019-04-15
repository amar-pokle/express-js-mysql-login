var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

// var connection = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todaydb'
});

// connection.connect(function(err)  {
//     if(err)   err;
//     console.log('Connected!!!');
// });

// connection.query("CREATE TABLE if not exists mytable(id int primary key, username VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, email VARCHAR(25) NOT NULL)", function (err, results) {
//     if (err) console.log('Error!' + err)
//     else {
//         console.log('Database Created')
//         connection.query("INSERT INTO mytable(id, username, password, email)  VALUES (101, 'aa.bb', 'aaa123', 'aaa@gmail.com')", function (err, results) {
//             if (err) console.log('Error2!' + err)
//             else console.log('Data Inserted')
//         });
//     };
// });

// connection.query("SELECT FROM mytable", function(err,result)  {
//     if(err) throw err;
// console.log(results[0].id);
// console.log(results[0].username);
// console.log(results[0].password);

app.use(session  ({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response)  {
    response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request,response)  {
    var username = request.body.username;
    var password = request.body.password;
    //console.log(` USER ${username} password ${password}`)
    if(username  && password)  {
        connection.query("SELECT * FROM mytable WHERE username =? AND password =?",[username, password], 
        function(error, result,field)  {
            if(result.length > 0)  {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
                // console.log("Corerct User and pass");
                //response.sendFile(path.join(__dirname + '/index.html'));
             
               
            }
            else {
                response.send('You insert correct username and password!!');
            }
            response.end();
        });

       } else {
        response.send('Please enter the username and password!!!');
        response.end();
       }
});

app.get('/home', function(request,response)  {
    if(request.session.loggedin)  {
        response.send('Hey Welcome Back user!! '  + request.session.username + '!');
    }  else  {
        response.send('Please Logged In!!');
    }
    response.end();
});

var server = app.listen(5000, function(request,response)  {
    console.log('Node server  running on .....');
});