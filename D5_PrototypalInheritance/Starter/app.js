// Your Javascript Code Goes Here
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var len = new Person('Len', 'Chang');
var wilson = new Person('Wilson', 'Chang')
len.greet();
wilson.greet();