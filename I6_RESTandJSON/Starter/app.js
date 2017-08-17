var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

// RESTFul: get
app.get('/api/person/:id', function(req, res) {
	// get that data from database
	res.json({ firstname: 'John', lastname: 'Doe' });
});
// RESTFul: post
app.post('/api/person', jsonParser, function(req, res) {
	// save th the database
});
// RESTFul: delete
app.delete('api/person/:id', function(req, res){
	// delete from the database
})

app.listen(port);