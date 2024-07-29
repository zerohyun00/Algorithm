let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

x1 = b[2] // 일의 자리
x2 = b[1] // 십의 자리
x3 = b[0] // 백의 자리

console.log(Number(a) * Number(x1));
console.log(Number(a) * Number(x2));
console.log(Number(a) * Number(x3));
console.log(Number(a) * Number(b));