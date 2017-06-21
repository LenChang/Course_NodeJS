var person = {
	firstname: '',
	lastname: '',
	greet: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

// A clean way to set up inheritance.
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

var len = Object.create(person);
len.firstname = 'Len';
len.lastname = 'Chang';

console.log(john.greet());
console.log(jane.greet());
console.log(len.greet());