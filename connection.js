var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express',
    options: {
        encrypt:false
    }
});



app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    connection.query('SELECT * FROM users', function (err, rows) {
        res.render("second", { users: rows});
    });
});

// router.get('/', function(req, res, next) {
//     res.render('newProject');
// });

// sql.connect(config).then(() => {
//     return sql.query`users from uname`
// }).then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// });

// module.exports = router;





app.listen(app.get('port'));
console.log('Node Server is listening on ' + app.get('port'));