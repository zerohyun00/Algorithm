function solution(n) {
  const answer = n.toString(2).split('1').length;
  while (true) {
    n++;
    if (n.toString(2).split('1').length == answer) {
      return n;
    }
  }
}