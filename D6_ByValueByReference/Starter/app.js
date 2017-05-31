// Pass by reference
function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log(c);

changeObj(c);
console.log(c);

// Pass by value
function change(b){
    b = 2;
}

var a = 1;
console.log(a);

change(a);
console.log(a);