let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = Number(input[0]);

if (90 <= data && data <= 100) {
  console.log('A');
} else if (80 <= data && data <= 89) {
  console.log('B');
} else if (70 <= data && data <= 79) {
  console.log('C');
} else if (60 <= data && data <= 69) {
  console.log('D');
} else {
  console.log('F');
}
