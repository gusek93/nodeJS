const process = require('process');

console.log(process.env);



setTimeout(() => {
    console.log('setTimeout');
},0);

// 현재 수행된 코드가 완료 된 후 등록한 콜백 함수를 task que 에 넣을때 사용, 다른 콜백은 무시하게 맨앞에 출력
process.nextTick(() => {
    console.log('nextTick');
});

for(let i = 0; i < 1000; i++) {
    console.log('for loop');
}