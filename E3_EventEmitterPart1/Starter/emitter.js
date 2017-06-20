
function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// Focus on the method of [].foreach
Emitter.prototype.emit = function(type){
    if (this.events[type]){
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;