
const fs = require('fs');
const path = require('path');


// 디렉토리 경로 설정(상대 경로)
const folder = path.dirname(__dirname)
const workingDir = path.join(folder,'practice','test');

const videoPath = path.join(workingDir, 'video');
const capturedPath = path.join(workingDir, 'captured');
const duplicatedPath = path.join(workingDir, 'duplicate')

//폴더 생성 함수
function createFolder() {
    fs.promises.mkdir(videoPath).then('done!').catch(console.error('이미 존재함'));
    fs.promises.mkdir(capturedPath).then('done!').catch(console.error('이미 존재함'));
    fs.promises.mkdir(duplicatedPath).then('done!').catch(console.error('이미 존재함')); 
}

//폴더 생성 함수 
//createFolder()


// 3. 문자열 포함 파일 읽어오는 부분 낙오..
fs.promises
.readdir(workingDir)
.then(processFiles)
.catch(console.log);

function processFiles(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            move(file, videoPath);
        } else if (isCapturedFile(file)) {
            move(file, capturedPath);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedPath);
        }
    })
}


function isVideoFile(file) {
    const reqExp = /(mp4|mov)$/gm;
    const match = file.match(reqExp);
    return !!match;
}

function isCapturedFile(file) {
    const reqExp = /(png|aae)$/gm;
    const match = file.match(reqExp);
    return !!match;
}

function isDuplicatedFile(files, file) {
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')){
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
    fs.promises
    .rename(oldPath, newPath)
    .catch(console.error)
}