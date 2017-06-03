var greet = require('./greet1');
greet();

var greet2 = require('./greet2');
var greet2a = require('./greet2').greet;
greet2.greet();
greet2a();