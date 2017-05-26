// Your Javascript Code Goes Here
function greet(){
    console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);