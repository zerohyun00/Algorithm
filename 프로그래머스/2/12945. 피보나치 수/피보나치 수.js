function solution(n) {
  if (n === 1 || n === 2) {
    return 1; // F(1)과 F(2)는 1
  }

  let a = 1,
    b = 1; // 초기값 F(1) = a, F(2) = b

  for (let i = 3; i <= n; i++) {
    let temp = (a + b) % 1234567; // 계산된 값을 1234567로 나눈 나머지
    a = b;
    b = temp;
  }

  return b;
}
