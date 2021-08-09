const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(callback) {
        this.emit('log', 'started. . .');
        callback();
        this.emit('log', 'ended!');
    }
}



module.exports.Logger = Logger;

//class 로 작성 하여 다른 파일에서 이벤트를 재사용 할 수 있다.