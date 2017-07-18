const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
// Because of buffer only exist 8 bytes, view[2] can't be stored.
view[2] = 20;
console.log(view);


const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));