// Your Javascript Code Goes Here
var person = {
    firstName: 'Len',
    lastName: 'Chang',
    greet: function(){
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};

person.greet();

console.log(person['firstName']);