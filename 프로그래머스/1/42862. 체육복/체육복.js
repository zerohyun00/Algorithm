function solution(n, lost, reserve) {
  // 여벌없이 분실한 학생
  let realLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
  // 분실없이 여벌이 있는 학생
  let realReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);

  // 체육복을 빌릴 수 있는 학생 수
  let answer = n - realLost.length; // 예시1 : 3

  for (let i = 0; i < realLost.length; i++) {
    let factLost = realLost[i];
    for (let j = 0; j < realReserve.length; j++) {
      let factReserve = realReserve[j];
      if (factReserve == factLost - 1 || factReserve == factLost + 1) {
        answer++;
        realReserve[j] -= 1;
        break;
      }
    }
  }
  return answer;
}