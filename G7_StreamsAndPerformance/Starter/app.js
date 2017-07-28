let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // let html = fs.readFileSync(__dirname + '/index.htm');
    // res.end(html);
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(5566, '127.0.0.1');