let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let S = Number(input[0]);
let sum = 0; // 누적합
let current = 0;

while (sum <= S) {
  current += 1;
  sum += current;
}
console.log(current - 1); // 개수를 출력하기 떄문에 1로 출력