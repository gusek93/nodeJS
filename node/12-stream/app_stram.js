const { count } = require('console');
const fs = require('fs');

//  const readStream = fs.createReadStream('./file.txt', {
//     highWaterMark:8,  //64 기본
//     encoding: 'utf-8',
// })

// readStream.on('data', chunk => {
//     console.log(chunk);
// });

// readStream.on('error', error => {
//     console.log(error);
// })

// 체이닝을 통해 간편하게 작성 할 수도 있다.
const data = [];
fs.createReadStream('./file.txt', {
    // console.log(chunk);
    // encoding: 'utf-8'

})
  .on('data', (chunk) => {
      data.push(chunk);
      console.count('data');
  })
  .on('end', () => {
      console.log(data.join(''));
  })
  .on('error', (error) => {
      console.log(error);
  });