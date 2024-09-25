function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n); // n이 3이고 i가 5이면 row = 1 (두번째 행)
    const col = i % n; // n이 3이고 i가 5이면 col = 2 (세번째 열)
    answer.push(Math.max(row + 1, col + 1)); // 행과 열중 더 큰 값
  }
  return answer;
}