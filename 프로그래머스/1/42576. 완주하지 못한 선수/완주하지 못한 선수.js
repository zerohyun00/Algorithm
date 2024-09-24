function solution(participant, completion) {
  participant.sort(); // 참가자 배열 정렬
  completion.sort(); // 완주자 배열 정렬
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]; // 두 배열에서 다른 첫 번째 참가자를 반환
    }
  }
}
