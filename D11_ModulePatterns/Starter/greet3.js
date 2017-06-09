function greet3(){
    this.greeting = 'Hello world, greet3!!';
    this.greet = function(){
        console.log(this.greeting);
    };
};

module.exports = new greet3();