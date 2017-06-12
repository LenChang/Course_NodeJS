// It change the reference point between exports and exports.module
exports = function(){
    console.log('Hello');
}

console.log(exports);
console.log(module.exports);