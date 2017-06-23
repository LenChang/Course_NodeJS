var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello world!';
}

// Greetr.prototype point to EventEmitter.prototype 
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ':' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
var greeter2 = new Greetr();
greeter2.greeting = 'I am not Hello world!';

greeter1.on('greet', function(data){
    console.log('Someone greeted!: ' + data);
});

greeter2.on('greet', function(){
    console.log('Someone greeted!');
})

// greeter1.__proto__ === Greetr.prototype
greeter1.greet('Tony');
greeter2.greet();
