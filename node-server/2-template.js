const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
//const http2 = require('http2'); // https

const name = 'Dayong';
const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS'},
    {name: 'Node'},
];

// 자바의 경우 서버를 실행 하려면 아파치등 등록을 해줘야 하지만 노드는 http 모듈을 통해 간편하게 실행 가능하다...
// 참 매력적인 언어군
const server = http.createServer((req, res) => {
    console.log('incoming....');
  
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
       ejs.renderFile('./template/index.ejs', {name})
       .then((data) => res.end(data));
        
    } else if(url === '/courses') {
        ejs.renderFile('./template/courses.ejs', {courses})
       .then((data) => res.end(data));
        
    } else {
        ejs.renderFile('./template/not-found.ejs', {name})
       .then((data) => res.end(data));
    }

    // res.end()를 호출 하니 화면이 안나오는 이슈가 있었다
    // pip는 비동기 함수로 호출만 하고 끝날떄까지 기다리지 않기 때문에 다음 함수인 res.end() 함수가 호출 되면서 파이핑이 멈춘것이다. 
    // pipe이 끝나면 자동으로 end() 처리가 되므로, 수동적으로 호출 해줄 필요가 없다. 
    //res.end();
    
});


server.listen(8080);