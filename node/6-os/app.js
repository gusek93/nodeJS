const os = require('os');


// 서버 정보를 알아낼때 유용하게 사용 할 수 있다. 
console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');
console.log(os.cpus());
console.log(os.hostname);