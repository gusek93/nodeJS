let num = 1;

const interval = setInterval(() => {
    console.log(num++);
},1000);

//interval 반복 함수에 timeout 으로  일정 시간 만큼 출력 후 중지 가능 
setTimeout(() => {
    console.log("TimeOut");
    clearInterval(interval);
}, 6000)