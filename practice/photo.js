const fs = require('fs');
const path = require('path');
const os = require('os');

// 초라한 내 하드코딩 경로... 
const video = './test/video'
const captured = './test/captured'
const duplicated = './test/duplicated'
const folder = './test'

// 기본 폴더 경로
const workingDir = path.join(os.homedir(), 'project/nodeStudy/practice', folder)
//console.log(workingDir);

// function makeFolder (video, captured, duplicated) {
//     if (!fs.existsSync(video)) {
//         fs.mkdirSync(video);
//     } else {
//         console.log("exist video folder");
//     }

//     if (!fs.existsSync(captured)) {
//         fs.mkdirSync(captured);
//     } else {
//         console.log("exist captured folder");
//     }

//     if (!fs.existsSync(duplicated)) {
//         fs.mkdirSync(duplicated);
//     } else {
//         console.log("exist duplicated folder");
//     }
// }

// // 폴더 생성 함수 
// makeFolder(video, captured, duplicated);


//솔루션 코드 코드 경로 
const videoDir = path.join(workingDir, 'video');
const captureDir = path.join(workingDir,'captured');
const duplicatedDir = path.join(workingDir,'duplicated');
console.log(videoDir);
console.log(captureDir);
console.log(duplicatedDir);
!fs.existsSync(videoDir) && fs.mkdirSync('video');


// console.log(path.parse('./test/','.mp4'));

// const mp4 = './test/a.mp4'
// const mov = './test/b.mov'

// function fileMove (mp4, mov) {
//         fs.promises.rename(mp4, './test/video/a.mp4')
//         .then(console.log("done!"))
//         .catch(console.error);
   
//         fs.promises.rename(mov, './test/video/b.mov')
//         .then(console.log("done!"))
//         .catch(console.error);
// }

// fileMove(mp4, mov)

fs.promises.readdir(workingDir)
.then(processFiles)
.catch(console.log);

function processFiles(files) {
    files.forEach((file) => {
        if(isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)){
            move(file, captureDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    });
}

// 정규 표현식
function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match;
}
function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}
function isDuplicatedFile(files, file) {
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find((f) => f.includes(edited));
    return !!found;
}

function move(file, targetDir) {
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    console.log(oldPath);

    fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// try catch 방법
// try {
//     fs.renameSync('./test/a.mp4', './test/video/a.mp4')
// } catch(error) {
//     console.log("파일이 이미 옮겨 졌거나 존재하지 않습니다. ");
// }

// 콜백 함수 방법
// fs.rename('./test/a.mp4', './test/video/a.mp4', (error) => {
//     console.log(error);
// })

//promise 사용 방법
// fs.promises.rename('./test/a.mp4', './test/video/a.mp4')
// .then(console.log("done!"))
// .catch(console.error);