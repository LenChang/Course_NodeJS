//-------let--------//
// //New and good coding style, it isn't working!!
// if(true){
//     let foo = 1;
//     console.log(foo);
// }
// console.log(foo);
// //Old coding style, it's working!!
// if(true){
//     var foo2 = 1;
//     console.log(foo2);
// }
//
// console.log(foo2);

//-------Default function parameters---------//
function add(a, b = 10) {
    console.log(a + b);
}

add(3);
add(2, 15);

//-------Rest parameters-----------//
// New coding style
function foo(...args) {
    console.log(args);
};

foo(1, 2, 3, 4, 5);

// Old coding style
function foo2() {
    console.log(arguments);
};

foo2(1, 2, 3, 4, 5);

// Destructuring
let [a, b] = [5,4,3,2,1];
console.log(b);

//--------- new.target ----------//
function foo3(){
    if(!new.target){
        return console.log("This isn't the object which is created")
    }
    console.log("This's a new object")
};

foo3();
new foo3();

//----------- Array.prototype.includes -----------//
console.log(2 in [1,2,3,4,5]);