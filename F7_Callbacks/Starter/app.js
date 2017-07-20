function greet(callback){
    console.log('Hello');
    var data = {
        name: 'Len Chang'
    };
    callback(data);
}

greet(function(data){
    console.log('The callback was invoked!');
    console.log(data);
});

greet(function(data){
    console.log('The different callback was invoked!');
    console.log(data.name);
});