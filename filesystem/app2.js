// 구현 하지 못한 부분에 대한 솔루션
const fs = require('fs');
const path =require('path');
const os = require('os');


// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const folder = process.argv;
console.log(folder);

if(!folder) {
    console.error('Please enter folder name in Pictures');
}

// const workingDir = path.join(os.homedir(), 'project/nodeStudy/filesystem', folder);
// console.log(workingDir);

//console.log(os.homedir());
//console.log(path.join(os.homedir()));
// 2. 폴더 안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당 mp4\mov, png\aae, IMG_1234 (IMG_E1234)




