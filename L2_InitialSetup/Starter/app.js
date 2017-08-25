var express = require('express');
var app = express();

var port = process.env.port || 3001;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);