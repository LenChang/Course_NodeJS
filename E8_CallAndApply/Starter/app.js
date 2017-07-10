var obj = {
    name: 'Len Chang',
    greet: function(){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet('Ya!!');
// func.call(this, param, param2);
obj.greet.call({ name: 'Wilson Chang'});
// func.apply(this, [param], [param2]);
obj.greet.apply({name: 'Yumin Hung'});