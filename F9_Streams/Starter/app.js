let fs = require('fs');

// 16 * 1024 = 16 KiB, it's the maximum size of chunk.
let readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
	console.log(chunk.length);
	writable.write(chunk);
});