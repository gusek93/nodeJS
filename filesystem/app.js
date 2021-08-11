const fs = require('fs');
const path = require('path');



// 현재 내 상태( 암울 하구만.. 파일 경로 읽어 오고 폴더 만드는 것까지 완성, 해당 파일을 조건에 맞게 폴더에 넣어주는건 미완성)
const fileData = "./test";

fs.readdir(fileData, (err,filelist)=> {
    console.log(filelist);
  
    fs.mkdir(path.join('./test', 'Video'), (err) => {
        return console.log(err);
    });
    fs.mkdir(path.join('./test', 'captured'), (err) => {
        return console.log(err);
    });
    fs.mkdir(path.join('./test', 'duplicated'), (err) => {
        return console.log(err);
    });


})    
    

console.log('hi');