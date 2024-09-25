function solution(wallpaper) {
  let answer = [];

  let n = wallpaper.length; // 행의 수
  let m = wallpaper[0].length; // 열의 수

  let row_min = n; // 행 최소 인덱스
  let col_min = m; // 열 최소 인덱스
  let row_max = 0; // 행 최대 인덱스
  let col_max = 0; // 열 최대 인덱스

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (wallpaper[i][j] == '#') {
        row_min = Math.min(i, row_min);
        row_max = Math.max(i, row_max);
        col_min = Math.min(j, col_min);
        col_max = Math.max(j, col_max);
      }
    }
  }
  answer = [row_min, col_min, row_max + 1, col_max + 1];

  return answer;
}