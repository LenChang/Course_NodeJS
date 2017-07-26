let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// // Prototype for pipe
// readable.on('data', function(chunk) {
// 	console.log(chunk);
// 	writable.write(chunk);
// });

readable.pipe(writable);

let gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);