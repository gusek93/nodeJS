const fs = require('fs').promises;

//read a file
fs.readFile('./text-new.txt', 'utf8')//
.then((data) => console.log(data))
.catch(console.error);


// writing a file
fs.writeFile('./text-new.txt', 'Hello, Coder!')//
.catch(console.error);

fs.appendFile('./text-new.txt', 'Yo, Coder!')//
.then(() => {
//copy -> 비동기적으로 실행 되므로 동기식으로 하길 원한다면 .then 안에 넣어주기 
fs.copyFile('./text-new.txt', './file2.txt')
.catch(console.error);
})
.catch(console.error);


//folder
fs.mkdir('sub-folder')//
.catch(console.error);


fs.readdir('./')
.then(console.log)
.catch(console.error)

// 이번 핵심은 동기 비동기의 차이를 이해 하고, .catch 를 통해 에러를 잡아내는 것
//pomise 는 항상 비동기 임을 인지, 순서가 중요 하다면 .then  안에 작성