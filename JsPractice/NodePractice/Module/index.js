// const http = require('http');   // 기본 모듈 중 http 모듈을 가져옴

// const hostname = '127.0.0.1';   // hostname, port 번호 할당
// const port = 3000;

// const server = http.createServer((req, res) => {
    
//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Hello World!\n');
//     } else if (req.url === '/users'){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('User List ');
//     } else {
//         res.statusCode = 404;
//         res.end('404 Not Found ');
//     }

// });

// server.listen(port, hostname, () => {   // listen: 서버를 요청 대기 상태 (클라이언트의 요청을 받기 위해 대기하는 상태)로 만들어주는 함수
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// const express = require('express');
// const morgan = require('morgan');   // 서드 파티 미들웨어를 사용할 때는 npm 사이트에서 찾은 뒤 npm install로 모듈 설치 후 사용
// const app = express();  // 어플리케이션 - 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가한다. 라우팅 설정을 할 수 있다. 서버를 요청 대기 상태로 만든다. 

// // 미들웨어 - 함수들의 연속 
// function logger(req, res, next) {
//     console.log('i am logger');
//     next(); // 미들웨어는 마지막에 next()함수를 써줘야 한다. 만약 next()를 호출하지 않으면 다음 함수가 동작하지 않는다.  
// }

// function logger2(req, res, next) {
//     console.log('i am logger2');
//     next();
// }

// function commonmw(req, res, next) {
//     console.log('commonmw');
//     next(new Error('error occured'));
// }

// 에러 미들웨어 - err 라는 파라메터를 하나 추가로 더 받음
// 전달받은 에러를 처리하거나, 에러를 처리 못했으면 다시 다음 미들웨어한테 에러를 넘겨줌
// // 에러를 처리했을 경우 next 호출
// function errormw(err, req, res, next) { 
//     console.log(err.message)
//     next();
// }

// app.use(logger);    // 미들웨어를 추가할 떄는 use 함수를 사용함.
// app.use(logger2);
// app.use(morgan('dev'));

// app.use(commonmw);    // 미들웨어를 추가할 떄는 use 함수를 사용함.
// app.use(errormw);

// app.listen(3000, function(){
//     console.log('Server is running');
// })

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

