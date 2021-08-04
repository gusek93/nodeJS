// 버퍼란
// Fixed-size chuck of memory
// array fo integers, byte of data

const fs = require('fs');

let buf = Buffer.from('hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());



//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

