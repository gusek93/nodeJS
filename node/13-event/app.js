const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
};
emitter.on('dayong', callback1);

emitter.on('dayong', (args) => {
    console.log('first callback - ', args);
});

emitter.on('dayong', (args) => {
    console.log('second Callback - ', args);
});

emitter.emit('dayong', {message: 1});
emitter.emit('dayong', {message: 2});
emitter.removeListener('dyaong', callback1);
emitter.emit('dayong', {message: 3});