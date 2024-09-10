function solution(d, budget) {
  let answer = 0;
  d.sort((a,b) => a- b);
  for(let i = 0; i <= d.length - 1; i++) {
    budget -= d[i];
    if(budget < 0) {
      break
    }
    answer++
  }
  return answer;
}