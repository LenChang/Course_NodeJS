'use strict';
var EventEmitter = require('events');
// var util = require('util');
var Greetr = require('./greetr');

//--- write by function ---//
// function Greetr() {
// 	EventEmitter.call(this);
// 	this.greeting = 'Hello world!';
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet', data);
// }

var greeter1 = new Greetr();
var greeter2 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter2.on('greet', function(data){
	console.log(`Hihi ${data}`);
});

greeter1.greet('Tony');
greeter2.greet('Len');