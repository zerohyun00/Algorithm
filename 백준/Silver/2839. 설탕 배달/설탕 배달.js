let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let answer = 0;

while (N > 0) {
  if (N % 5 === 0) {
    N -= 5;
  } else {
    N -= 3;
  }
  answer += 1;

  if (N < 0) {
    answer = -1;
    break;
  }
}
console.log(answer);
