var express = require('express');
var path = require('path');
var passport = require('passport');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {

});

app.listen(8080);
app.use('/semantic',express.static(path.join(__dirname, 'semantic')));
