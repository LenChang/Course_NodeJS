// Your Javascript Code Goes Here
var firstname = 'Len';

(function (lastname){

    var firstname = 'Wilson';
    console.log(firstname);
    console.log(lastname);

})('Chang');
/*--- IIFE --- */
// (function () { }());
// (function () { })();
// Both are correct.

console.log(firstname);