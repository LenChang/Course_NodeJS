let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
        firstname: 'Len',
        lastname: 'Chang'
    };
    // res.end(obj.toString());
    res.end(JSON.stringify(obj));
    
}).listen(5566, '127.0.0.1');