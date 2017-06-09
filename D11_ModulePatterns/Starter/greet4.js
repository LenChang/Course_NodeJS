function greet4(){
    this.greeting = 'Hello world, greet4!!';
    this.greet = function(){
        console.log(this.greeting);
    };
};

module.exports = greet4;