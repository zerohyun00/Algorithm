let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let divide = input[0].split('-');
// ["55","50+40"]
let answer = 0;
for (let i = 0; i < divide.length; i++) {
  // 각 그룹 내부에서 덧셈 적용
  let hab = divide[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) {
    answer += hab;
  } else {
    answer -= hab;
  }
}

console.log(answer);