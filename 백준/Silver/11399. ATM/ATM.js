let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
let total = [];
arr.reduce((acc, cur) => {
  acc += cur;
  total.push(acc);
  return acc;
}, 0);
let result = 0;
for (let value of total) {
  result += value;
}
console.log(result);