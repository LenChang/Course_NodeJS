var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

function IAmJoke(){
	this.aaa = 'aaa';
	this.firstname = 'Joke';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	// Chains Person and Pliceman, and adds 'firstname' and 'lastname'.
	Person.call(this);
	// Chains IAmJoke and Pliceman, and IAmJoke rewrite content of 'firstname'.
	IAmJoke.apply(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();