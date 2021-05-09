// require -> 함수 안에 불러올 경로 
const {odd, even} = require('./var');


function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;