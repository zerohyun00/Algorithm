let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => b - a);

let count = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  // 1000 < 4200 true, 100 < 200 true
  count += parseInt(k / arr[i]); // count(4) = 4200 / 1000 , count(6) = 200 / 100
  k %= arr[i]; // 200 %= 100 , k = 0
}
console.log(count);

// 1. k의값은 4200, arr[i~끝] 50000,10000,5000,1000,500,100,50,10,5,1
// 4200 / 1000 = 4 , 4200 % 1000 = 200 ,

