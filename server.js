var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

var session;
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}));

app.get('/login', function(req, res)  {
    res.sendFile('index.html', {root: __dirname});
});
app.post('/login', function(req,res)  {
    res.end(JSON.stringify(req.body));
    session = req.session;

    if(req.body.username == 'admin' && req.body.password == 'admin')  {
        session.uniqueId = req.body.username
    }
    res.redirect('/redirects');
});
app.get('/redirects', function(req,res)  {
    session = req.session;
    if(session.uniqueId) {
        console.log(session.uniqueId);
        res.redirect('/admin');
    }  else {
        res.end("Who are You!!");
    }
})


app.listen(3000, function(req,res)  {
    console.log("NO de server is running....");
});