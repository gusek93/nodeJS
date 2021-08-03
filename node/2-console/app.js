console.log('logging. . .');
console.clear();


// log level
console.log('log');     //개발
console.info('info');   //정보
console.warn('warn');   //경보
console.error('error'); //에러, 사용자 에러, 시스템 에러


//assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');


// print object
const student = {name: 'dayong', age: 20, company: {name: 'AC'} };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2});


// 성능 확인용, for loop가 도는 시간 확인
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');


// conutiong, 함수 호출 횟수 
function a() {
    console.count('a function');
}
a();
// 중간에 reset 가능 
console.countReset('a function');
a();

// 디버깅에 유용한 trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.trace('f3');
}
f1();