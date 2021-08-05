const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
//압축
const zlibStream = zlib.createGzip();
//해제
//const zlibStream = zlib.createGunzip();

const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
    console.log('done!');
  });

const http = require('http');
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});

server.listen(3000);