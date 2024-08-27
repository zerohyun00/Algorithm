function solution(array, commands) {
  let answer = []; // return 할 answer 배열

  for (let i = 0; i < commands.length; i++) {
    // commands의 길이만큼 반복문 순회
    answer.push(
      array
        .slice(commands[i][0] - 1, commands[i][1]) // slice(start,end)한 값을
        .sort((a, b) => a - b)[commands[i][2] - 1],
    ); // 오름차순정렬 후 k가 3이니깐 3번째 요소를 return
  } // [2,3,5,6]
  return answer;
}