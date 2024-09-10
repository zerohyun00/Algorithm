function solution(nums) {
  let poncketmon = nums.length / 2;
  const set = new Set(nums);
  let miniponketmon = set.size; // nums배열에 중복제거 한 크기
  if (miniponketmon < poncketmon) {
    // 3 < 2 , 3 < 3 , 3 < 2
    return miniponketmon;
  } else {
    return poncketmon; // 2 , 3 , 2
  }
}