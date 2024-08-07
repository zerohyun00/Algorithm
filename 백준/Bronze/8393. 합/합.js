let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = Number(input[0].split(' '));
let hab = 0;

for (let i = 1; i <= result; i++) {
  hab += i;
}
console.log(hab);