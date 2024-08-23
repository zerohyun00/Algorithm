function solution(board, moves) {
  let answer = 0; // 인형이 터져서 사라진 개수
  let stack = []; // stack 자료 구조

  for (let move of moves) {
    // moves 배열 순회
    let x = move - 1; // 배열인덱스는 0부터 시작하기 때문에 -1

    for (let i = 0; i < board.length; i++) {
      // 각 열을 아래쪽으로 내려가면서 인형이 있는지 확인한다.
      if (board[i][x] != 0) {
        // i번째 행 , x번째 열
        // 인형이 있는 칸 확인
        if (stack.length > 0 && stack[stack.length - 1] === board[i][x]) {
          // 인형이 있으면 스택의 제일 위에 있는 인형과 같은지 확인
          // 인형이 같으면 pop 한 후 같은 인형이 2개이기 때문에 answer을 2 증가
          stack.pop();
          answer += 2;
        } else {
          // 같은 인형이 아니면 새로운 인형을 스택에 push
          stack.push(board[i][x]);
        }
        board[i][x] = 0; // 인형을 뽑았으면 그 자리를 0으로 변경 후 break로 반복문 종료
        break;
      }
    }
  }

  return answer;
}