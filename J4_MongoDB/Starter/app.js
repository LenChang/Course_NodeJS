var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://ami_mongo:Amizz754F!@ec2-54-65-234-160.ap-northeast-1.compute.amazonaws.com:27017/ami_main_db')

var Schema = mongoose.Schema;

var stateSchema = new Schema({
	country: String,
	state: String
})

var State = mongoose.model('Stateaaa', stateSchema);

var test = State({
	country: 'aaa',
	state: 'aaa',
});

test.save(function(err){
	if(err) throw err;

	console.log('test saved');
})

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	State.find({}, function(err, states){
		if (err) throw err;

		console.log(states);
	})
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);