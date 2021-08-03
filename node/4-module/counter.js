let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}


//다른 모듈에서 사용 할 수 있게 exports
module.exports.getCount = getCount;
module.exports.increase = increase;

