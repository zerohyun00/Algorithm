let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

function compare(a, b) {
  if (a[0] != b[0]) {
    return a[0] - b[0]; // x 좌표 기준 오름차순 정렬
  } else return a[1] - b[1]; // x가 같으면 y좌표 기준 오름차순 정렬
}
arr.sort(compare); // compare 함수로 정렬

let answer = '';
for (let sorted of arr) {
  answer += sorted[0] + ' ' + sorted[1] + '\n';
}
console.log(answer);
