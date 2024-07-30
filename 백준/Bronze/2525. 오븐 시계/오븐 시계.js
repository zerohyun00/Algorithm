let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let curTime = input[0].split(' ').map(Number);

let a = curTime[0];
let b = curTime[1];
let needTime = Number(input[1]);

let totalMinute = a * 60 + b + needTime; // 분의 형태로 바꿔줌
totalMinute %= 1440; // 하루는 1440분이므로 1440으로 나눠준다.

let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + ' ' + minute);
