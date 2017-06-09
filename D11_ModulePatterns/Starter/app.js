var greet = require('./greet1');
greet();

// var greet2 = require('./greet2').greet;
// greet2();
var greet2 = require('./greet2');
greet2.greet();


// greet3 and greet3b are the same object.
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();


var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();
grtr.greeting = 'Changed greet4!!';

var grtr2 = new greet4();
grtr2.greet();

var greet5 = require('./greet5').greet;

// It doesn't work
greet5.greeting = 'aaa';

greet5();