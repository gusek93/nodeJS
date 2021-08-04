const fs = require('fs');


// rename 사용법 3가지 
// rename(...., callback(error, data))
// try { renameSync(...) } catch(e) { } -> 동기식으로 에러처리를 안하면 실행중 에러를 발생 할 수 있다. 
// promise.rename().then().catch(0)


try {
fs.renameSync('./text.txt', './file-new.txt');
} catch (error) {
    console.error(error);

}

fs.rename('./file-new.txt', './text.txt', (error) =>  {
    console.log(error);
});
console.log('hello');


fs.promises.rename('./text.txt', './text-new.txt')
.then(() => {
    console.log('Done');
})
.catch(console.error);