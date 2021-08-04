const os = require('os');

console.log('code1');
//time api는 label 이름이 timeEnd 와 같아야 한다. 
console.time('timestart');

setTimeout(() => {
    console.timeEnd('timestart');
    console.log('setTimeout 0');
    
}, 0);

// console.log('code2');
// setImmediate(() => {
//     console.log('setImmediate');
// });

// console.log('code3');
// process.nextTick(()=> {
//     console.log('process.netTick');
// }) 


for (let i = 0; i < 1000; i++) {
}