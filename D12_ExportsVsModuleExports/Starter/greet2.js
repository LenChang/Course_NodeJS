// It "add" a reference point in exports.greet
exports.greet = function(){
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);