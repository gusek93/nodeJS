console.log('require 가 최상단에 오지 않아도 된다.');

module.exports = '저를 찾아 보세요';

require('./var');

console.log('require check 입니다.');
console.log(require.cache);
console.log('require main 입니다.');
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);
